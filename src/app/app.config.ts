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
import {
  specialsFeatureKey,
  specialsReducer,
} from "./store/reducers/specials.reducer";
import { SpecialsEffects } from "./store/effects/specials.effect";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(),
    provideRouter(routes),
    provideEffects([AuthEffects, SpecialsEffects]),
    provideState(authFeatureKey, authReducer),
    provideState(specialsFeatureKey, specialsReducer),
    provideHttpClient(),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Keep the last 25 states
        name: "Ok foods Admin",
      }),
      BrowserAnimationsModule
    ),
  ],
};
