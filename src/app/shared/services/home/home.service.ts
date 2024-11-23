import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ApiResponse } from 'src/app/core/interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  homePage(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/homepage`);
  }
}

