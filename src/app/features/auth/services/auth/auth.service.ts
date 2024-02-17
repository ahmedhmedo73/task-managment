import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../core/environments/environment';
import { LoginData, LoginResponse } from '../../models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(data: LoginData) {
    console.log('sad');

    return this.httpClient.post<LoginResponse>(
      environment.authBaseURL + 'login',
      data
    );
  }
}
