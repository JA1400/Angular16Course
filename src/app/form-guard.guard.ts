import { CanDeactivateFn } from '@angular/router';

export const canDeactivateFn: CanDeactivateFn<any> = (component: any) => {
  return confirm("Do you want to leave this page? Unsaved changes will be lost.") ? true : false;
};
