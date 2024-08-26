import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideState, provideStore, StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { EffectsModule, provideEffects } from "@ngrx/effects";
import { AuthEffects } from "./store/effects/auth.effect";
import { authFeatureKey, authReducer } from "./store/reducers/auth.reducer";
import { provideHttpClient } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(),
    provideRouter(routes),
    provideEffects([AuthEffects]),
    provideState(authFeatureKey, authReducer),
    provideHttpClient(),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Keep the last 25 states
        name: "Ok foods Admin",
      })
    ),
  ],
};
