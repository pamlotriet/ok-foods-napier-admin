import { inject, Injectable, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import * as SpecialsSelector from "../selectors/specials.selector";
import { ISpecials } from "../interfaces/food.interface";
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

  uploadSpecialImage(
    file: File,
    product: SpecialsModel,
    url: string,
    token: string
  ) {
    this.store.dispatch(
      SpecialsActions.startUpload({ file, product, url, token })
    );
  }
}
