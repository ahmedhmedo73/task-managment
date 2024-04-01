import { Routes } from '@angular/router';
import { ProductsComponent } from './features/dashboard/features/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/tasks',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'products',
    runGuardsAndResolvers: 'always',
    component: ProductsComponent,
  },
];
