import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvRejectedService {

  constructor( private http : HttpClient) { }

  getRejectedList(): Observable<any> {
    return this.http.get('rejectedApplicantList');
  }
}
