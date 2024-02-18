import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './tasks.routes';
import { IndexComponent } from './index/index.component';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [IndexComponent, HeaderIndexComponent, TaskListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FontAwesomeModule],
})
export class TasksModule {}
