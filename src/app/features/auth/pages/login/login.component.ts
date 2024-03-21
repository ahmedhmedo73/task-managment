import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectIsLoading } from '../../store/auth.selectors';
import { login } from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  httpLoading: boolean = false;
  subscriptionList: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.createLoginForm();
    this.getIsLoading();
  }
  getIsLoading() {
    this.subscriptionList.push(
      this.store.select(selectIsLoading).subscribe({
        next: (data: boolean) => {
          this.httpLoading = data;
        },
      })
    );
  }
  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        'eve.holt@reqres.in',
        [Validators.required, Validators.minLength(8)],
      ],
      password: ['cityslicka', Validators.required],
    });
  }
  login(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(login({ loginData: this.loginForm.value }));
    }
  }
  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
