import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RejectedCV } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class CvRejectedService {

  RejectedUserData: RejectedCV[] = [];

  constructor( private http: HttpClient) { }

  setRejectedList(): void {
    this.RejectedUserData.splice(0, this.RejectedUserData.length);
    this.http.get<any>('rejectedApplicantList').subscribe(
      response => {
        this.RejectedUserData.push(...response.data);
      }
    );
  }

  getRejectedList(): Observable<any> {
    return of(this.RejectedUserData);
  }

  removeCvFromList(id, status): void {
    if (status === 'New' || status === 'deleted') {
      const index = this.RejectedUserData.indexOf(this.RejectedUserData.find(item => item.applicantId === id));
      this.RejectedUserData.splice(index, 1);
    }
  }

}
