import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentLang = localStorage.getItem('lang') || 'ar';
    
    const modifiedRequest = request.clone({
      setHeaders: {
        'lang': currentLang
      }
    });

    return next.handle(modifiedRequest);
  }
}
