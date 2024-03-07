import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../../auth/store/auth.actions';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  links: any[] = [
    {
      label_en: 'dashboard',
      label_ar: 'لوحة التحكم',
      icon: 'assets/images/sidebar/dashboard.svg',
      routerLink: '/dashboard',
    },
    {
      label_en: 'projects',
      label_ar: 'المشاريع',
      icon: 'assets/images/sidebar/projects.svg',
      routerLink: '/dashboard/projects',
    },
    {
      label_en: 'tasks',
      label_ar: 'المهمات',
      icon: 'assets/images/sidebar/tasks.svg',
      routerLink: '/dashboard/tasks',
    },
    {
      label_en: 'calendar',
      label_ar: 'التقويم',
      icon: 'assets/images/sidebar/calendar.svg',
      routerLink: '/dashboard/calendar',
    },
  ];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
