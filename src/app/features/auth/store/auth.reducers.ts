import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { IAuthState } from './auth.state';

export const initialUsersState: IAuthState = {
  token: '',
  isLoading: false,
  isLoggedIn: false,
};
export const AuthReducer = createReducer<IAuthState>(
  initialUsersState,
  on(AuthActions.login, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.loginSuccess, (state, { loginResponse }) => {
    localStorage.setItem('token', loginResponse.token);
    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      token: loginResponse.token,
    };
  }),
  on(AuthActions.requestFail, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(AuthActions.logout, (state) => {
    localStorage.setItem('token', '');
    return {
      ...state,
      isLoggedIn: false,
      token: '',
    };
  })
);
