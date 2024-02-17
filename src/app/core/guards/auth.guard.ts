import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { SharedService } from '../../shared/services/shared/shared.service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService: SsrCookieService = inject(SsrCookieService);
  const token = cookieService.get('token') || '';
  const router: Router = inject(Router);
  const sharedService: SharedService = inject(SharedService);
  if (!token) {
    router.navigateByUrl('/auth/login');
    sharedService.show({
      severity: 'error',
      summary: 'Authentication',
      detail: 'Please log in',
    });
    return false;
  }
  return true;
};
