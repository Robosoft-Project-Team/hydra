import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SendInvitation {
  name: string;
  designation: string;
  mobile_no: string;
  location: string;
  jobDetail: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class SendNewInviteService {

  constructor(private http: HttpClient) { }

  sendInvitation(obj: SendInvitation): any {
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
