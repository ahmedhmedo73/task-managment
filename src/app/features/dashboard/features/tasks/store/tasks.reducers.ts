import { createReducer, on } from '@ngrx/store';
import * as TasksActions from './tasks.actions';
import { ITasksState } from './tasks.state';
import { ITasks } from '../models/tasks.interface';

export const initialUsersState: ITasksState = {
  tasks: [],
  taskFormDialogVisibility: false,
  taskFormMode: 'Add',
  selectedTask: { id: 0, categoryId: 0, image: '', title: '' },
};

export const TasksReducer = createReducer<ITasksState>(
  initialUsersState,
  on(TasksActions.requestFail, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(TasksActions.AddTask, (state, { task }) => {
    let tasks: ITasks[] = JSON.parse(JSON.stringify(state.tasks));
    tasks[task.categoryId].tasks.unshift(task);

    return {
      ...state,
      tasks,
    };
  }),
  on(TasksActions.DeleteTask, (state, { categoryIndex, taskIndex }) => {
    let tasks: ITasks[] = JSON.parse(JSON.stringify(state.tasks));
    tasks[categoryIndex].tasks.splice(taskIndex, 1);
    return {
      ...state,
      tasks,
    };
  }),
  on(TasksActions.UpdateTask, (state, { task }) => {
    let tasks: ITasks[] = JSON.parse(JSON.stringify(state.tasks));
    tasks[task.categoryId].tasks[task.id] = task;
    return {
      ...state,
      tasks,
    };
  }),
  on(TasksActions.OpenTaskFormDialog, (state, params) => {
    return {
      ...state,
      taskFormDialogVisibility: true,
      ...params,
    };
  }),
  on(TasksActions.CloseTaskFormDialog, (state) => {
    return {
      ...state,
      taskFormDialogVisibility: false,
    };
  }),
  on(TasksActions.SetSelectedTask, (state, { task }) => {
    return {
      ...state,
      selectedTask: task,
    };
  })
);
