import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';
import { Settings } from 'src/app/core/interfaces/settings';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.scss']
})
export class WhatsappBtnComponent implements OnInit {

  settings!: Settings['data'];

  constructor(private _settings: SettingsService) { }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this._settings.settings$.subscribe(res => {
      if (res) {
        this.settings = res;
      }
    });
  }
}
