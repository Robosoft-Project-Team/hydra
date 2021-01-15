import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http.interceptor';

export const HttpInterceptorFiles = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
];
