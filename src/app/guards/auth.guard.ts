import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    // crear un servicio para verificar la v[alidez del token]
    
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
