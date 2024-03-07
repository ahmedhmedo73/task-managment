import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITasksState } from './tasks.state';

export const selectTasksState = createFeatureSelector<ITasksState>('tasks');
export const selectTasks = createSelector(
  selectTasksState,
  (state) => state.tasks
);
export const selectTaskFormDialogVisibility = createSelector(
  selectTasksState,
  (state) => state.taskFormDialogVisibility
);
export const selectTaskFormMode = createSelector(
  selectTasksState,
  (state) => state.taskFormMode
);
export const selectSelectedTask = createSelector(
  selectTasksState,
  (state) => state.selectedTask
);
