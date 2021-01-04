import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendNewInviteService {

  constructor(private http: HttpClient) { }

  sendInvitation(obj): any {
    const putBody = {
      name: obj.name,
      designation: obj.designation,
      mobileNum: obj.mobile_no,
      location: obj.location,
      jobDetail: obj.jobDetail,
      emailId: obj.email,
      invitedDate: new Date().toISOString().split('T')[0]
    };
    return this.http.put(`sendInvitation`, putBody);
  }
}
