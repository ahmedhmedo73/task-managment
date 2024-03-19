import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared/shared.service';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const sharedService: SharedService = inject(SharedService);
  const isLoggedIn = !!localStorage.getItem('token');

  if (!isLoggedIn) {
    sharedService.show({
      severity: 'error',
      summary: 'Authentication',
      detail: 'Please log in',
    });
    router.navigateByUrl('/auth/login');
  }
  return true;
};
