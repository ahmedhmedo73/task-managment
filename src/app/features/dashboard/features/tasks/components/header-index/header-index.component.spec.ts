import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIndexComponent } from './header-index.component';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../../../../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

describe('HeaderIndexComponent', () => {
  let component: HeaderIndexComponent;
  let fixture: ComponentFixture<HeaderIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderIndexComponent],
      imports: [SharedModule, TranslateModule.forRoot()],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
