import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TranslateTestingModule } from 'ngx-translate-testing';
import enTranslate from '../../../../../assets/lang/en.json';
import arTranslate from '../../../../../assets/lang/ar.json';
import { TranslateService } from '@ngx-translate/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let emailEL: DebugElement;
  let passwordEL: DebugElement;
  let submitLoginFormEL: DebugElement;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        SharedModule,
        TranslateTestingModule.withTranslations({
          en: enTranslate,
          ar: arTranslate,
        }).withDefaultLanguage('en'),
      ],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    emailEL = fixture.debugElement.query(By.css('#email'));
    passwordEL = fixture.debugElement.query(By.css('#password'));
    submitLoginFormEL = fixture.debugElement.query(By.css('#submitLoginForm'));

    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate correctly', () => {
    const welcomeTitleH2 = (fixture.nativeElement as HTMLElement).querySelector(
      '.welcome-title'
    );
    expect(welcomeTitleH2?.textContent).toBe('Welcome back!');
    translateService.use('ar');
    fixture.detectChanges();
    expect(welcomeTitleH2?.textContent).toBe('مرحبًا بعودتك!');
  });

  it('email input should be required', () => {
    const emailControl = component.loginForm.controls['email'];

    //required
    emailEL.triggerEventHandler('input', {
      target: { value: '' },
    });
    fixture.detectChanges();
    expect(emailControl.hasError('required')).toBeTrue();

    //minLength
    emailEL.triggerEventHandler('input', {
      target: { value: 'ahmed' },
    });
    fixture.detectChanges();
    emailControl.setValue('csa');
    expect(emailControl.hasError('minlength')).toBeTrue();

    //valid
    emailEL.triggerEventHandler('input', {
      target: { value: 'ahmedkamel' },
    });
    fixture.detectChanges();
    expect(emailControl.valid).toBeTrue();
  });

  it('submit button disability should interact with form validty', () => {
    emailEL.triggerEventHandler('input', {
      target: { value: 'ahmedkamel' },
    });
    passwordEL.triggerEventHandler('input', {
      target: { value: '123' },
    });

    const formIsValid = !!emailEL.context && !!passwordEL.context;
    expect(formIsValid).toBe(!component.loginForm.invalid);
  });
});
