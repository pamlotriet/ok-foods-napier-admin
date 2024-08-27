import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../shared/services/auth.service";
import { AuthActions } from "../actions/auth.actions";
import { map, mergeMap, tap } from "rxjs";
import { AuthResponse } from "../../shared/models/auth.response";
import { Router } from "@angular/router";
import { SpecialsActions } from "../actions/specials.actions";
import { SpecialsService } from "../../shared/services/specials.service";
import { SpecialsModel } from "../../shared/models/specials.model";

@Injectable()
export class SpecialsEffects {
  getFoodSpecials = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.getFoodSpecials),
        mergeMap(() =>
          specialsService
            .getFoodSpecials()
            .pipe(
              map((foodSpecials: SpecialsModel[]) =>
                SpecialsActions.getFoodSpecialsSuccess({ foodSpecials })
              )
            )
        )
      );
    }
  );

  deleteSpecialsItem = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.deleteSpecialItemById),
        mergeMap((action) => {
          return specialsService
            .deleteFoodSpecialsItem(action.id)
            .pipe(map(() => SpecialsActions.deleteSpecialItemSuccess()));
        })
      );
    }
  );

  deleteAllFoodSpecials = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.deleteAllFoodSpecials),
        mergeMap(() => {
          return specialsService
            .deleteAllFoodSpecials()
            .pipe(map(() => SpecialsActions.deleteSpecialItemSuccess()));
        })
      );
    }
  );
}
