import { Component } from '@angular/core';
import { ITasks } from '../../models/tasks.interface';
import { Store } from '@ngrx/store';
import { selectTasks } from '../../store/tasks.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  taskList: ITasks[] = [];
  subscriptionList: Subscription[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.store.select(selectTasks).subscribe({
      next: (data: ITasks[]) => {
        this.taskList = data;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
