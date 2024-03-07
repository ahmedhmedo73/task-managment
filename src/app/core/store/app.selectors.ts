import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from './app.state';

export const selectAppState = createFeatureSelector<IAppState>('app');
export const selectLanguage = createSelector(
  selectAppState,
  (state) => state.language
);
