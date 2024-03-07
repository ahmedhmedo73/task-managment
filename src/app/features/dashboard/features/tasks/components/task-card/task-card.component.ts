import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DeleteTask,
  OpenTaskFormDialog,
  SetSelectedTask,
} from '../../store/tasks.actions';
import { ITask } from '../../models/tasks.interface';
import { selectSelectedTask } from '../../store/tasks.selectors';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input('categoryIndex') categoryIndex: number = 0;
  @Input('taskIndex') taskIndex: number = 0;
  @Input('task') task: ITask = { id: 0, categoryId: 0, title: '', image: '' };
  @Input('border') border: string = '';

  constructor(private store: Store) {}

  updateTask(): void {
    this.store.dispatch(
      OpenTaskFormDialog({
        taskFormMode: 'Update',
      })
    );
    this.store.dispatch(SetSelectedTask({ task: this.task }));
  }

  deleteTask(): void {
    this.store.dispatch(
      DeleteTask({
        categoryIndex: this.categoryIndex,
        taskIndex: this.taskIndex,
      })
    );
  }
}
