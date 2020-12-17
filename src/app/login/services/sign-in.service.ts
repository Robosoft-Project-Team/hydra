import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  baseUrl;

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) { }

  signInDetails(userEmail, userPassword, userRole): any {
    const postBody = {
      email: userEmail,
      password: userPassword,
      role: userRole
    };
    return this.http.post(`${this.baseUrl}signIn`, postBody);
  }

  storeCredentials(response): void {
    this.storage.setJwtToken(response.token);
    // store some details in dashboard services
  }
}
