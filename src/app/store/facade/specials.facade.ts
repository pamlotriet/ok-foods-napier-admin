import { inject, Injectable, Signal } from "@angular/core";
import { IAuth } from "../interfaces/auth.interface";
import { AuthModel } from "../../shared/models/auth.model";
import { toSignal } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import * as SpecialsSelector from "../selectors/specials.selector";
import { AuthActions } from "../actions/auth.actions";
import { ISpecials } from "../interfaces/food.interface";
import { Observable } from "rxjs";
import { SpecialsModel } from "../../shared/models/specials.model";
import { SpecialsActions } from "../actions/specials.actions";
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: "root",
})
export class SpecialsFacade implements ISpecials {
  private readonly store = inject(Store);

  sFoodSpecials: Signal<SpecialsModel[] | undefined> = toSignal(
    this.store.select(SpecialsSelector.selectFoodSpecials)
  );

  getFoodSpecials() {
    this.store.dispatch(SpecialsActions.getFoodSpecials());
  }

  deleteSpecialItemById(id: Guid) {
    this.store.dispatch(SpecialsActions.deleteSpecialItemById({ id }));
  }

  deleteAllFoodSpecials() {
    this.store.dispatch(SpecialsActions.deleteAllFoodSpecials());
  }
}
