import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './featuers/auth/auth.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-managment';
}
