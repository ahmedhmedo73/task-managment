import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { HeaderIndexComponent } from '../components/header-index/header-index.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { provideMockStore } from '@ngrx/store/testing';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../../../shared/shared.module';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        HeaderIndexComponent,
        SidebarComponent,
        TaskListComponent,
        TaskFormComponent,
      ],
      imports: [TranslateModule.forRoot(), SharedModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
