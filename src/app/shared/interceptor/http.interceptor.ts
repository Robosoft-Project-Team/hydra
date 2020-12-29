import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';
import { StorageService } from '../services/storage.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor( private storage: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('url :', req.url);
    let reqUrl;

    if (this.storage.hasJwtToken()) {
      reqUrl = req.clone({
        setHeaders: { Authorization: `Bearer ${this.storage.getJwtToken()}`},
        url: 'http://ec2-3-138-235-228.us-east-2.compute.amazonaws.com:5000/' + req.url
      });
    } else {
      reqUrl = req.clone({
        url: 'http://ec2-3-138-235-228.us-east-2.compute.amazonaws.com:5000/' + req.url
      });
    }

    return next.handle(reqUrl).pipe(
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
