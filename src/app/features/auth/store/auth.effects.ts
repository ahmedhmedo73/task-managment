import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';

import { SharedService } from '../../../shared/services/shared/shared.service';
import { AuthService } from '../services/auth/auth.service';
import * as AuthActions from './auth.actions';
import { LoginResponse } from '../models/auth.interface';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private sharedService: SharedService,
    private router: Router,
    private readonly AuthService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ loginData }) => this.AuthService.login(loginData)),
      map((loginResponse: LoginResponse) => {
        this.sharedService.show({
          severity: 'success',
          summary: 'Login',
          detail: 'Log in successfully',
        });

        this.router.navigateByUrl('');
        return AuthActions.loginSuccess({ loginResponse });
      }),
      catchError((error: any) => {
        this.sharedService.show({
          severity: 'error',
          summary: 'Login',
          detail: error.error,
        });
        return of(AuthActions.requestFail());
      })
    )
  );
}
