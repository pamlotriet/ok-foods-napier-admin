import { createReducer, on, Action } from "@ngrx/store";
import { AuthActions } from "../actions/auth.actions";
import { state } from "@angular/animations";

export const authFeatureKey = "authentication";

export interface AuthenticationState {
  token: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export const AuthenticationInitialState: AuthenticationState = {
  token: "",
  isLoading: false,
  isLoggedIn: false,
};

const reducer = createReducer(
  AuthenticationInitialState,
  on(AuthActions.authenticateUser, (state) => ({
    ...state,
    token: "",
    isLoading: true,
    isLoggedIn: false,
  })),
  on(AuthActions.authenticateUserSuccess, (state, { token }) => ({
    ...state,
    token,
    isLoading: false,
    isLoggedIn: true,
  }))
);

export function authReducer(
  state: AuthenticationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
