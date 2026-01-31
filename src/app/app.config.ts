// Your error is happening because (in your Angular version) `provideRouter()`
// does NOT accept `{ useHash: true }`.
// Instead, hash-based routing is enabled via a Router *feature*:

// ✅ FIX (recommended): use withHashLocation()

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation())
  ]
};
