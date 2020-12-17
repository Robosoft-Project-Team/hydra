import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  email: string;
  baseUrl: string;

  constructor(private http: HttpClient) { }

  setUserEmail( email: string ): void {
    this.email = email;
  }

  checkUserExists(email: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', email);
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.get(`${this.baseUrl}forgotPassword` , {params: params});
  }

  verifyOtp(otp: string): boolean {
    let response;
    let params = new HttpParams();
    params = params.append('email', this.email);
    params = params.append('otp', otp);
    return true;
    // tslint:disable-next-line: object-literal-shorthand
    this.http.get(`${this.baseUrl}/verifyOtp` , {params: params})
    .subscribe(res => response = res);
    if (response.status === 200){
      return true;
    } else {
      return false;
    }
  }

  changePassword(newPassword: string): any {
    let response;
    const postbody = {
      emailId: this.email,
      password: newPassword
    };
    this.http.post(`${this.baseUrl}/changePassword` , { body: postbody })
    .pipe(
      catchError(this.handleError)
    )
    .subscribe(
      res => response = res,
      err => console.log('Error : ', err)
    );
  }

  handleError(error: HttpErrorResponse): any {
    return throwError(error);
  }
}
