import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authGuard = (): boolean => {
  const router = inject(Router);

  const token = localStorage.getItem("authToken");

  if (token) {
    return true;
  } else {
    router.navigate(["/"]);
    return false;
  }
};
