import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskFormDialogVisibility: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor() {}

  openTaskformDialog(): void {
    this.taskFormDialogVisibility.next(true);
  }
  closeTaskFormDialog(): void {
    this.taskFormDialogVisibility.next(false);
  }
}
