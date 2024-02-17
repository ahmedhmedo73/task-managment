import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { LayoutComponent } from './layout/layout.component';
import { TasksModule } from './features/tasks/tasks.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TasksModule],
})
export class DashboardModule {}
