import { inject, Injectable, Signal } from "@angular/core";
import { IAuth } from "../interfaces/auth.interface";
import { AuthModel } from "../../shared/models/auth.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import * as AuthSelector from "../selectors/auth.selector";
import { AuthenticationState } from "../reducers/auth.reducer";
import { AuthActions } from "../actions/auth.actions";

@Injectable({
  providedIn: "root",
})
export class AuthFacade implements IAuth {
  private readonly store = inject(Store);

  sToken: Signal<string | undefined> = toSignal(
    this.store.select(AuthSelector.selectAuthenticationStateToken)
  );

  authenticateUser(authCredentials: AuthModel): void {
    this.store.dispatch(AuthActions.authenticateUser({ authCredentials }));
  }
}
