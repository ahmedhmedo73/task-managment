import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { IAppState } from './app.state';

export const initialAppState: IAppState = {
  language: 'ar',
};

export const AppReducer = createReducer<IAppState>(
  initialAppState,
  on(AppActions.changeLanguage, (state) => {
    return {
      ...state,
      language: state.language == 'ar' ? 'en' : 'ar',
    };
  })
);
