import { CanActivateFn } from '@angular/router';

/* the canActivate simply desables access to that route when it returns false */
export const testGuard: CanActivateFn = (route, state) => {
  return true;
};
