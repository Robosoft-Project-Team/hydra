import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { Applicant } from '../shared/interface';
import { applicants, list, allResumes } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class CvAnalysisService {

  selectedDesignation;

  constructor(private http: HttpClient) { }

  setDesignation(designation: string): void {
    this.selectedDesignation = designation;
  }

  getDesignation(): string {
    return this.selectedDesignation;
  }

  getApplicant(id: number): Observable<any> {
    // return applicants.filter(item => item.applicantId === id)[0];
    return this.http.get(`getApplicant/${id}`);
  }

  getList(): any {
    return list;
  }

  getAllResumes(): any {
    return allResumes;
  }

  getAttachment(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'blob' });
  }

  getAllCv(date): Observable<any> {
    return this.http.get(`getDesignationCount/${date}`);
  }

  getDesignationList(): Observable<any> {
    return this.http.get('getDesignationList');
  }
}
