import { createActionGroup, props } from "@ngrx/store";
import { AuthModel } from "../../shared/models/auth.model";

export const AuthActions = createActionGroup({
  source: "AuthDto",
  events: {
    authenticateUser: props<{ authCredentials: AuthModel }>(),
    authenticateUserSuccess: props<{ token: string }>(),
  },
});
