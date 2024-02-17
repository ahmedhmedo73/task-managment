import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { IAuthState } from './auth.state';

export const initialUsersState: IAuthState = {
  token: '',
  isLoading: false,
};
export const AuthReducer = createReducer<IAuthState>(
  initialUsersState,
  on(AuthActions.requestFail, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(AuthActions.setToken, (state, { token }) => {
    // cookieService.set('token', token);
    return {
      ...state,
      token,
    };
  }),

  on(AuthActions.login, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.loginSuccess, (state, { loginResponse }) => {
    // cookieService.set('token', loginResponse.token);
    return {
      ...state,
      isLoading: false,
      token: loginResponse.token,
    };
  })
);
