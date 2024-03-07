import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './tasks.routes';
import { IndexComponent } from './index/index.component';
import { HeaderIndexComponent } from './components/header-index/header-index.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderIndexComponent,
    TaskListComponent,
    TaskCardComponent,
    TaskFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class TasksModule {}
