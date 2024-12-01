import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language/language.service';
import { CacheService } from '../../services/cache/cache.service';
import { SettingsService } from '../../services/settings/settings.service';
import { Settings } from 'src/app/core/interfaces/settings';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lists = [
    { name: "navbar.home", link: "/" },
    { name: "navbar.about-us", link: "about-us" },
    { name: "navbar.portfolio", link: "portfolio" },
    { name: "navbar.services", link: "services" },
    { name: "navbar.contact-us", link: "contact-us" },
  ];
  settings!: Settings["data"];

  constructor(private _translate: TranslateService, private _lang: LanguageService, private _cache: CacheService, private _settings: SettingsService) {
    const lang = localStorage.getItem('lang') || 'ar';
    this._translate.use(lang);
    this._lang.setLanguage(lang);
  }

  ngOnInit(): void {
    this.getSettings();
  }

  changeLanguage() {
    this._cache.clear();
    const newLang = this._translate.currentLang === 'en' ? 'ar' : 'en';
    this._translate.use(newLang);
    localStorage.setItem('lang', newLang);
    this._lang.setLanguage(newLang);
  }

  getSettings() {
    this._settings.settings$.subscribe(res => {
      if (res) this.settings = res;
    });
  }
}
