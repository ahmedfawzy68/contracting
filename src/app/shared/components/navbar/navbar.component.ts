import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language/language.service';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  lists = [
    { name: "navbar.home", link: "home" },
    { name: "navbar.about-us", link: "about-us" },
    { name: "navbar.portfolio", link: "portfolio" },
    { name: "navbar.services", link: "services" },
    { name: "navbar.contact-us", link: "contact-us" },
  ];

  constructor(private _translate: TranslateService, private _lang: LanguageService, private _cache: CacheService) {
    const lang = localStorage.getItem('lang') || 'ar';
    this._translate.use(lang);
    this._lang.setLanguage(lang);
  }

  changeLanguage() {
    this._cache.clear();
    const newLang = this._translate.currentLang === 'en' ? 'ar' : 'en';
    this._translate.use(newLang);
    localStorage.setItem('lang', newLang);
    this._lang.setLanguage(newLang);
  }
}
