import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-header-index',
  templateUrl: './header-index.component.html',
  styleUrl: './header-index.component.scss',
})
export class HeaderIndexComponent {
  faPlus = faPlus;
  constructor(private tasksService: TasksService) {}

  openTaskFormDialog(): void {
    this.tasksService.openTaskformDialog();
  }
}
