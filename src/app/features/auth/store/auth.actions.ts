import { createAction, props } from '@ngrx/store';
import { LoginData, LoginResponse } from '../models/auth.interface';

const prefix = '[Auth]';

export const login = createAction(
  `${prefix} login`,
  props<{
    loginData: LoginData;
  }>()
);
export const loginSuccess = createAction(
  `${login.type} login Success`,
  props<{
    loginResponse: LoginResponse;
  }>()
);
export const requestFail = createAction(`${prefix} request fail`);
export const logout = createAction(`${prefix} logout`);
