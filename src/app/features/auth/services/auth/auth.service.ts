import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../core/environments/environment';
import { LoginData, LoginResponse } from '../../models/auth.interface';
import { Store } from '@ngrx/store';
import { selectISLoggedIn } from '../../store/auth.selectors';
import { logout } from '../../store/auth.actions';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggoedIn: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private store: Store,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.getIsLoggedIn();
  }

  getIsLoggedIn(): void {
    this.store.select(selectISLoggedIn).subscribe({
      next: (data) => {
        this.isLoggoedIn = data;
      },
    });
  }

  login(data: LoginData) {
    return this.httpClient.post<LoginResponse>(
      environment.authBaseURL + 'login',
      data
    );
  }

  logout(): void {
    this.store.dispatch(logout());
    this.router.navigateByUrl('/auth/login');

    this.sharedService.show({
      severity: 'success',
      summary: 'Authentication',
      detail: 'Logged Out Successfully',
    });
  }
}
