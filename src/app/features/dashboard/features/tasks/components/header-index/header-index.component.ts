import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { OpenTaskFormDialog } from '../../store/tasks.actions';

@Component({
  selector: 'app-header-index',
  templateUrl: './header-index.component.html',
  styleUrl: './header-index.component.scss',
})
export class HeaderIndexComponent {
  faPlus = faPlus;
  constructor(private store: Store) {}

  openTaskFormDialog(): void {
    this.store.dispatch(OpenTaskFormDialog({ taskFormMode: 'Add' }));
  }
}
