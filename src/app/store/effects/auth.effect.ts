import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../shared/services/auth.service";
import { AuthActions } from "../actions/auth.actions";
import { map, mergeMap, tap } from "rxjs";
import { AuthResponse } from "../../shared/models/auth.response";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  authenticateUser = createEffect(
    (
      actions$ = inject(Actions),
      authService = inject(AuthService),
      router = inject(Router)
    ) => {
      return actions$.pipe(
        ofType(AuthActions.authenticateUser),
        mergeMap((action) =>
          authService.authenticateUser(action.authCredentials).pipe(
            map((response: AuthResponse) => {
              const token = response.token;
              return AuthActions.authenticateUserSuccess({ token });
            }),
            tap(({ token }) => {
              if (token) {
                localStorage.setItem("authToken", token);
                router.navigateByUrl("/dashboard");
              }
            })
          )
        )
      );
    }
  );
}
