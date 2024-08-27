import { SpecialsModel } from "../../shared/models/specials.model";
import { Signal } from "@angular/core";
import { Guid } from "guid-typescript";

export interface ISpecials {
  sFoodSpecials: Signal<SpecialsModel[] | undefined>;
  deleteSpecialItemById: (id: Guid) => void;
  deleteAllFoodSpecials: () => void;
  getFoodSpecials: () => void;
}
