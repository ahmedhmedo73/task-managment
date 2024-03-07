import { createAction, props } from '@ngrx/store';
import { ITask, ITasks, TaskFormModeType } from '../models/tasks.interface';

const prefix = '[Tasks]';

export const getTasks = createAction(`${prefix} get tasks`);
export const AddTask = createAction(
  `${prefix} add task`,
  props<{
    task: ITask;
  }>()
);
export const UpdateTask = createAction(
  `${prefix} update task`,
  props<{
    task: ITask;
  }>()
);
export const DeleteTask = createAction(
  `${prefix} delete task`,
  props<{
    categoryIndex: number;
    taskIndex: number;
  }>()
);
export const OpenTaskFormDialog = createAction(
  `${prefix} open taskFormDialog`,
  props<{
    taskFormMode: TaskFormModeType;
  }>()
);
export const CloseTaskFormDialog = createAction(
  `${prefix} close taskFormDialog`
);
export const SetSelectedTask = createAction(
  `${prefix} set selectedTask`,
  props<{
    task: ITask | undefined;
  }>()
);
export const requestFail = createAction(`${prefix} request fail`);
