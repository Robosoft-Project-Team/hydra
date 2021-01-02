import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SentInviteService {

  constructor(private http: HttpClient) { }

  getInvitedList(start: string, end: string): Observable<any> {
    const body: any = {
      start: start,
      end: end
    };
    console.log(start,end);
    return this.http.post('inviteesDetails', body);
  }

  getInviteCount(): Observable<any> {
    // const body: any = {
    //   start: start,
    //   end: end
    // };
    return this.http.get('sentInvitationCount');
  }
}
