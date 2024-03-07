import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { LayoutComponent } from './layout/layout.component';
import { TasksModule } from './features/tasks/tasks.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TasksModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    SharedModule,
    TranslateModule,
  ],
})
export class DashboardModule {}
