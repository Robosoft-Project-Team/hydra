import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationListService {

  constructor(private http: HttpClient) { }

  getNotificationList(): Observable<any> {
    return this.http.get('notification');
  }
}
