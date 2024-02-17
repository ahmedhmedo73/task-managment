import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthReducer } from '../featuers/auth/store/auth.reducers';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  auth: AuthReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
