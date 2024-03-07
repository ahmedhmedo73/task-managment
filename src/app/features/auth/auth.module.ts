import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './auth.routes';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { MessageService } from 'primeng/api';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [MessageService],
})
export class AuthModule {}
