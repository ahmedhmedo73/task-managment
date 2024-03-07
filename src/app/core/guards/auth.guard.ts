import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared/shared.service';
import { AuthService } from '../../features/auth/services/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const sharedService: SharedService = inject(SharedService);
  const authService: AuthService = inject(AuthService);

  if (!authService.isLoggoedIn) {
    sharedService.show({
      severity: 'error',
      summary: 'Authentication',
      detail: 'Please log in',
    });
    router.navigateByUrl('/auth/login');
  }
  return true;
};
