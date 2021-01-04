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

  deleteNotification(id: number): Observable<any> {
    return this.http.delete('removeNotification/'+id);
  }

  joinDeclineEvent(eventId: any, status: any): Observable<any> {
    const body: any = {
      eventId,
      status
    };
    return this.http.post('eventAcceptorReject', body);
  }
}
