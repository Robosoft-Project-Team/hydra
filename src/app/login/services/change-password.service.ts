import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

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
    const body = {
      username: email
    };
    return this.http.post(`forgotPassword`, body);
  }

  sendOtp(): Observable<any> {
    return this.checkUserExists(this.email);
  }

  verifyOtp(userOtp: string): Observable<any> {
    const body = {
      username: this.email,
      otp: userOtp
    };
    return this.http.post(`verifyOtp`, body);
  }

  changePassword(newPassword: string): any {
    const putbody = {
      username: this.email,
      password: newPassword
    };
    return this.http.put(`changePassword`, { body: putbody });
  }
}
