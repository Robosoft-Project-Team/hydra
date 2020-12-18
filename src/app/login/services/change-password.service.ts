import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  email: string;
  constructor(private http: HttpClient) {
  }

  setUserEmail(email: string): void {
    this.email = email;
  }

  checkUserExists(email: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', email);
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.get(`${environment.baseUrl}forgotPassword`, { params: params });
  }

  sendOtp(): void | string {
    let params = new HttpParams();
    if (!this.email) {
      return 'Email not exists';
    }
    params = params.append('email', this.email);
    // tslint:disable-next-line: object-literal-shorthand
    this.http.get(`${environment.baseUrl}forgotPassword`, { params: params })
      .subscribe(
        res => {
          if (res) {
            return 'OTP sent to your Email';
          }
        },
        error => {
          return error.message;
        }
      );
  }

  verifyOtp(otp: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', this.email);
    params = params.append('otp', otp);
    // tslint:disable-next-line: object-literal-shorthand
    return this.http.get(`${environment.baseUrl}verifyOtp`, { params: params });
  }

  changePassword(newPassword: string): any {
    const putbody = {
      emailId: this.email,
      password: newPassword
    };
    return this.http.put(`${environment.baseUrl}changePassword`, { body: putbody });
  }
}
