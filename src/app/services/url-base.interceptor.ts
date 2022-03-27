import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class UrlBaseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newURL = `${environment.config.host}${environment.config.baseHref}${request.url}`;

    return next
      .handle(
        request.clone({
          url: newURL,
        })
      )
      .pipe(tap(() => console.log(`UrlBaseInterceptor - ${newURL}`)));
  }
}
