import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUsData } from 'src/app/core/interfaces/about';
import { ApiResponse } from 'src/app/core/interfaces/home';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private _http: HttpClient) { }

  getAbout(): Observable<AboutUsData> {
    return this._http.get<AboutUsData>(`${environment.apiUrl}/about-us`);
  }
}
