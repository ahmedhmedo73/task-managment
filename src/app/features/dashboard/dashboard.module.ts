import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { LayoutComponent } from './layout/layout.component';
import { TasksModule } from './features/tasks/tasks.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent],
  imports: [RouterModule.forChild(routes), TasksModule, SharedModule],
})
export class DashboardModule {}
