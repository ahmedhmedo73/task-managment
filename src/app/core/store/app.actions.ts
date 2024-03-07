import { createAction, props } from '@ngrx/store';
import { LanguageType } from '../models/app.interface';

const prefix = '[App]';

export const changeLanguage = createAction(`${prefix} change language`);
