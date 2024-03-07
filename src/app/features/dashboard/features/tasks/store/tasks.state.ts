import { ITask, ITasks, TaskFormModeType } from '../models/tasks.interface';

export interface ITasksState {
  tasks: ITasks[];
  taskFormMode: TaskFormModeType;
  selectedTask: ITask | undefined;
  taskFormDialogVisibility: boolean;
}
