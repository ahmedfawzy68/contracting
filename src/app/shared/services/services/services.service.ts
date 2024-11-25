import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from 'src/app/core/interfaces/services';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http: HttpClient) { }

  getServices():Observable<Services>{
    return this._http.get<Services>(`${environment.apiUrl}/services`);
  }
}
