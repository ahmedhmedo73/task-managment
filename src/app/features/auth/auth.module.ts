import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './auth.routes';
import { AuthLayoutComponent } from './layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from './store/auth.reducers';
import { AuthEffects } from './store/auth.effects';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  providers: [MessageService],
})
export class AuthModule {}
