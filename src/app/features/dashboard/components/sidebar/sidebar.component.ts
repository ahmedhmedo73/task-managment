import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  links: any[] = [
    {
      label: 'dashboard',
      icon: 'assets/images/sidebar/dashboard.svg',
      routerLink: '/dashboard',
    },
    {
      label: 'projects',
      icon: 'assets/images/sidebar/projects.svg',
      routerLink: '/projects',
    },
    {
      label: 'tasks',
      icon: 'assets/images/sidebar/tasks.svg',
      routerLink: '/tasks',
    },
    {
      label: 'calendar',
      icon: 'assets/images/sidebar/calendar.svg',
      routerLink: '/calendar',
    },
  ];
}
