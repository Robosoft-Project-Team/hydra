import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResendInviteService {

  constructor(private http: HttpClient) { }

  resendInvite(name: string, designation: string, location: string, emailId: string): Observable<any> {
    const body: any = {
      name: name,
      designation: designation,
      mobileNum: "9999999999",
      location: location,
      jobDetail: "Android developer",
      emailId: emailId,
      invitedDate: moment().format('YYYY-MM-DD')
    };
    return this.http.put('sendInvitation', body);
  }
}
