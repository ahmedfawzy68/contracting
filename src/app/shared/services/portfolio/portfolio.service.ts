import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from 'src/app/core/interfaces/portfolio';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private _http: HttpClient) { }

  getProjects(): Observable<Portfolio> {
    return this._http.get<Portfolio>(`${environment.apiUrl}/projects`);
  }
}
