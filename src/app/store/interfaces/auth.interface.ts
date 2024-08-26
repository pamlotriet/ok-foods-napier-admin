import { Signal } from "@angular/core";
import { AuthModel } from "../../shared/models/auth.model";

export interface IAuth {
  sToken: Signal<string | undefined>;
  authenticateUser: (authCredentials: AuthModel) => void;
}
