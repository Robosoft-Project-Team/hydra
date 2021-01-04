import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) { }

  signInDetails(userEmail, userPassword, userRole): any {
    const postBody = {
      username: userEmail,
      password: userPassword,
      role: userRole
    };
    return this.http.post(`signIn`, postBody);
  }

  storeCredentials(token): void {
    this.storage.setJwtToken(token);
    // store some details in dashboard services
  }

  registerUser(userDetails): any {
    userDetails.role = [userDetails.role];
    console.log(userDetails);
    return this.http.post(`signUp`, userDetails);
  }

  logout():void{
    this.http.put('logOut',null);
    this.storage.removeJwtToken();
  }
}
