import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { SpecialsModel } from "../../shared/models/specials.model";
import { Guid } from "guid-typescript";

export const SpecialsActions = createActionGroup({
  source: "SpecialsDto",
  events: {
    getFoodSpecials: emptyProps(),
    getFoodSpecialsSuccess: props<{ foodSpecials: SpecialsModel[] }>(),
    deleteSpecialItemById: props<{ id: Guid }>(),
    deleteSpecialItemSuccess: emptyProps(),
    deleteAllFoodSpecials: emptyProps(),
  },
});
