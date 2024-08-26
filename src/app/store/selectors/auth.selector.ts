import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthenticationState, authFeatureKey } from "../reducers/auth.reducer";

export const selectAuthState =
  createFeatureSelector<AuthenticationState>(authFeatureKey);

export const selectAuthenticationStateToken = createSelector(
  selectAuthState,
  (state: AuthenticationState) => state.token
);
