import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { AuthReducer } from '../../features/auth/store/auth.reducers';
import { TasksReducer } from '../../features/dashboard/features/tasks/store/tasks.reducers';
import { ITasksState } from '../../features/dashboard/features/tasks/store/tasks.state';
import { IAuthState } from '../../features/auth/store/auth.state';
import { AppReducer } from './app.redusers';
import { IAppState } from './app.state';
import { ITasks } from '../../features/dashboard/features/tasks/models/tasks.interface';

export interface State {
  tasks: ITasksState;
  auth: IAuthState;
  app: IAppState;
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer,
  auth: AuthReducer,
  tasks: TasksReducer,
};

export function storageMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  let onInit = true;

  return function (state, action: Action) {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      let savedState = JSON.parse(localStorage.getItem('__storage__') || '{}');

      if (Object.keys(savedState).length == 0) {
        savedState = nextState;
        savedState.tasks.tasks = initTaskList;
      }
      return savedState;
    }

    localStorage.setItem('__storage__', JSON.stringify(nextState));
    return nextState;
  };
}

export const metaReducers: MetaReducer<State>[] = [storageMetaReducer];

const initTaskList: ITasks[] = [
  {
    category: {
      name_ar: 'جديد',
      name_en: 'To do',
      border: '1px solid #cad9f6',
      background:
        'linear-gradient(0deg, #eef2fc, #eef2fc),linear-gradient(0deg, #cad9f6, #cad9f6)',
      color: '#14367b',
      icon: 'assets/images/tasks/toDo.svg',
    },
    tasks: [
      {
        id: 0,
        categoryId: 0,
        image: 'assets/images/tasks/cards/card1.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 1,
        categoryId: 0,
        image: 'assets/images/tasks/cards/card2.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        categoryId: 0,
        image: 'assets/images/tasks/cards/card3.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        categoryId: 0,
        image: 'assets/images/tasks/cards/card2.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    category: {
      name_ar: 'قيد التنفيذ',
      name_en: 'In progress',
      border: '1px solid #ffe4c2',
      background:
        'linear-gradient(0deg, #fff6eb, #fff6eb), linear-gradient(0deg, #ffe4c2, #ffe4c2)',
      color: '#8f4f00',
      icon: 'assets/images/tasks/inProgress.svg',
    },
    tasks: [
      {
        id: 4,
        categoryId: 1,
        image: 'assets/images/tasks/cards/card1.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        categoryId: 1,
        image: 'assets/images/tasks/cards/card2.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 6,
        categoryId: 1,
        image: 'assets/images/tasks/cards/card3.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 8,
        categoryId: 1,
        image: 'assets/images/tasks/cards/card2.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
    ],
  },
  {
    category: {
      name_ar: 'مكتمل',
      name_en: 'Done',
      border: '1px solid #ffe4c2',
      background:
        'linear-gradient(0deg, #fff6eb, #fff6eb), linear-gradient(0deg, #ffe4c2, #ffe4c2)',
      color: '#8f4f00',
      icon: 'assets/images/tasks/done.svg',
    },

    tasks: [
      {
        id: 9,
        categoryId: 2,
        image: 'assets/images/tasks/cards/card1.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 10,
        categoryId: 2,
        image: 'assets/images/tasks/cards/card2.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 11,
        categoryId: 2,
        image: 'assets/images/tasks/cards/card3.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
      {
        id: 12,
        categoryId: 2,
        image: 'assets/images/tasks/cards/card2.svg',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
      },
    ],
  },
];
