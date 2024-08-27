import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  specialsFeatureKey,
  SpecialsState,
} from "../reducers/specials.reducer";

export const selectSpecialsState =
  createFeatureSelector<SpecialsState>(specialsFeatureKey);

export const selectFoodSpecials = createSelector(
  selectSpecialsState,
  (state: SpecialsState) => state.foodSpecials
);
