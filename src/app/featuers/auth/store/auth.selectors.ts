import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<IAuthState>('auth');
export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);
export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
