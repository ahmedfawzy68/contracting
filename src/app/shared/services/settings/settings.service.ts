import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Settings } from 'src/app/core/interfaces/settings';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _settings = new BehaviorSubject<Settings["data"] | null>(null);
  settings$ = this._settings.asObservable();

  constructor(private _http: HttpClient) { }

  getSettings(): Observable<Settings> {
    return this._http.get<Settings>(`${environment.apiUrl}/settings`);
  }
  
  setSettings(settings: Settings["data"]) {
    this._settings.next(settings);
  }
}
