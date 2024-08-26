import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthFacade } from "../../store/facade/auth.facade";

export const authGuard = (): boolean => {
  const router = inject(Router);
  const authFacade = inject(AuthFacade);

  const token = localStorage.getItem("authToken");

  if (token) {
    return true;
  } else {
    router.navigate(["/"]);
    return false;
  }
};
