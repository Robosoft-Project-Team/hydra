import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

  constructor(private http:HttpClient) { }

  getMemberList():Observable<any>{
    return this.http.get(`getMembers`);
  }  

  CreateEvent(obj):any{
    const postBody={
      title:obj.event_title,
      institution:obj.institution_name,
      location:obj.location,
      eventDate:obj.date,
      description:obj.description,
    };
    return this.http.post(`createEvent`,postBody)
  }
}
