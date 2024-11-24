import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';
import { Settings } from 'src/app/core/interfaces/settings';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    { name: 'navbar.about-us', url: '/about-us' },
    { name: 'navbar.portfolio', url: '/portfolio' },
    { name: 'navbar.services', url: '/services' },
    { name: 'navbar.contact-us', url: '/contact-us' },
  ]
  settings!: Settings["data"];
  loading:boolean = true;

  constructor(private _settings: SettingsService, private _lang: LanguageService) { }


  ngOnInit(): void {
    this._lang.language$.subscribe(lang => {
      this.getSettings();
    })
  }
  getSettings() {
    this.loading = true;
    this._settings.getSettings().subscribe(res => {
      this.settings = res.data;
      this._settings.setSettings(this.settings)
      this.loading = false;
    })
  }

}
