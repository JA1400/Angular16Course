import { compileNgModule } from '@angular/compiler';
import { CanMatchFn } from '@angular/router';

export const adminGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('role');
  console.log(role);
  if(role === 'ADMIN') return true;
  return false;
};
