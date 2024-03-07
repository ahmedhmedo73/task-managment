import { Component } from '@angular/core';
import { AuthModule } from './features/auth/auth.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { selectLanguage } from './core/store/app.selectors';
import { LanguageType } from './core/models/app.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthModule, DashboardModule, SharedModule],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'task-managment';
  lang: LanguageType = 'ar';

  constructor(
    private translateService: TranslateService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getLanguage();
  }

  getLanguage(): void {
    this.store.select(selectLanguage).subscribe({
      next: (data) => {
        this.lang = data;
        this.initLanguage();
      },
    });
  }

  initLanguage(): void {
    this.translateService.addLangs(['en', 'ar']);
    this.translateService.setDefaultLang(
      this.translateService.getDefaultLang()
    );

    this.translateService.use(this.lang);

    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', this.lang == 'ar' ? 'rtl' : 'ltr');
    document
      .getElementsByTagName('html')[0]
      .setAttribute('lang', this.lang || 'ar');
  }
}
