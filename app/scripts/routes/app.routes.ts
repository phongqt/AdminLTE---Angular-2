import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeRoutes } from '../routes/home.routes';
import { CanDeactivateGuard } from '../class/can.deactivate.guard';
import { AUTH_PROVIDERS } from '../providers/auth';

export const routes: RouterConfig = [
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CanDeactivateGuard,
  AUTH_PROVIDERS
];