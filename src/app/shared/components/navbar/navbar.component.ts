import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _translate: TranslateService) { }

  lists = [
    { name: "navbar.home", link: "home" },
    { name: "navbar.about-us", link: "about-us" },
    { name: "navbar.portfolio", link: "portfolio" },
    { name: "navbar.services", link: "services" },
    { name: "navbar.contact-us", link: "contact-us" },
  ]

  changeLanguage() {
    this._translate.use(this._translate.currentLang === 'en' ? 'ar' : 'en');
  }

}
