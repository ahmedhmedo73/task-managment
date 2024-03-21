import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../../core/environments/environment';
import { MessageService } from 'primeng/api';

describe('AuthService', () => {
  let service: AuthService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({}), MessageService],
    });
    service = TestBed.inject(AuthService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully', () => {
    service
      .login({ email: 'eve.holt@reqres.i', password: 'cityslicka' })
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
          expect(response.token).toBe('QpwL5tke4Pnpja7X4');
        },
      });
    const mockReq = testingController.expectOne(
      environment.authBaseURL + 'login'
    );
    expect(mockReq.request.method).toEqual('POST');
    mockReq.flush({ token: 'QpwL5tke4Pnpja7X4' });
  });
});
