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

  createEvent(obj):any{    
    return this.http.post(`createEvent`, obj);
  }
}
