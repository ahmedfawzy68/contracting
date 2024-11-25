import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/interfaces/contact';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  contactUs(data: FormGroup): Observable<Contact> {
    return this._http.post<Contact>(`${environment.apiUrl}contact-us`, data)
  }
}
