import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

let modules = [
  CommonModule,
  DialogModule,
  FontAwesomeModule,
  ButtonModule,
  ReactiveFormsModule,
  FormsModule,
  InputTextareaModule,
  ToastModule,
  HttpClientModule,
  RouterOutlet,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
