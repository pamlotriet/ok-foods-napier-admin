import { createReducer, on, Action } from "@ngrx/store";
import { AuthActions } from "../actions/auth.actions";
import { SpecialsModel } from "../../shared/models/specials.model";
import { SpecialsActions } from "../actions/specials.actions";

export const specialsFeatureKey = "specials";

export interface SpecialsState {
  foodSpecials: SpecialsModel[];
  isLoading: boolean;
  isLoggedIn: boolean;
}

export const SpecialsInitialState: SpecialsState = {
  foodSpecials: [],
  isLoading: false,
  isLoggedIn: false,
};

const reducer = createReducer(
  SpecialsInitialState,
  on(SpecialsActions.getFoodSpecials, (state) => ({
    ...state,
    foodSpecials: [],
    isLoading: true,
    isLoggedIn: false,
  })),
  on(SpecialsActions.getFoodSpecialsSuccess, (state, { foodSpecials }) => ({
    ...state,
    foodSpecials,
    isLoading: false,
    isLoggedIn: true,
  })),
  on(SpecialsActions.deleteSpecialItemById, (state) => ({
    ...state,
    foodSpecials: [],
    isLoading: true,
    isLoggedIn: false,
  })),
  on(SpecialsActions.deleteSpecialItemSuccess, (state) => ({
    ...state,
    foodSpecials: [],
    isLoading: false,
    isLoggedIn: false,
  }))
);

export function specialsReducer(
  state: SpecialsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
