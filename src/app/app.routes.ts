import { Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { authGuard } from "./shared/services/auth.guard";

export const routes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
  },
];
