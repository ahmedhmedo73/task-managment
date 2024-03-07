import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { changeLanguage } from '../../../../core/store/app.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faBell = faBell;
  faMagnifyingGlass = faMagnifyingGlass;
  searchKeyword: string = '';

  constructor(private store: Store) {}

  changeLanguage(): void {
    this.store.dispatch(changeLanguage());
  }
}
