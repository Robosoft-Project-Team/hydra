import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JobSummary } from 'src/app/core/models';
import { Organizer, ResumeCard } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class CvAnalysisService {

  selectedDesignation;
  organizers: Organizer[] = [];
  selectedResumes: ResumeCard[] = [];
  totalApplicantsData: JobSummary[] = [];


  constructor(private http: HttpClient) { }

  setDesignation(designation: string): void {
    this.selectedDesignation = designation;
  }

  getDesignation(): string {
    return this.selectedDesignation;
  }

  getApplicant(id: number): Observable<any> {
    return this.http.get(`getApplicant/${id}`);
  }

  getAttachment(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'blob' });
  }

  setTotalApplicantsData(date): Promise<boolean> {
    this.totalApplicantsData.splice(0, this.totalApplicantsData.length);
    return new Promise((resolve, reject) => {
      this.http.get<any>(`getDesignationCount/${date}`).subscribe(
        response => {
          this.totalApplicantsData.push(...response.data);
          resolve(true);
        }
      );
    });
  }

  getApplicantsData(): Observable<any> {
    return of(this.totalApplicantsData);
  }

  getDesignationList(): Observable<any> {
    this.setOrganizers();
    return this.http.get('getDesignationList');
  }

  getAssignedList(): Observable<any> {
    return this.http.get('assignedApplicant');
  }

  getApplications(id): void {
    this.selectedResumes.splice(0, this.selectedResumes.length);
    this.http.get<any>(`getApplications/${id}`).subscribe(
      response => {
        this.selectedResumes.push(...response.data);
      }
    );
  }

  getSelectedResumes(): Observable<any> {
    return of(this.selectedResumes);
  }

  assignApplicantToOrganiser(applicantId, employeeId): void {
    const putBody = {
      applicant_id: applicantId,
      employee_id: employeeId
    };
    this.http.put<any>('assignTo', putBody).subscribe(
      response => { },
      error => console.log(error)
    );
  }

  changeApplicantStatus(applicantId, applicantStatus): void {
    const putBody = {
      id: applicantId,
      status: applicantStatus
    };
    this.http.put<any>('changeApplicationStatus', putBody).subscribe(
      response => { },
      error => console.log(error)
    );
  }

  changeStatusOfSelectedResumes(id, status): void {
    if (this.selectedResumes.length) {
      if (status === 'deleted') {
        const index = this.selectedResumes.indexOf(this.selectedResumes.find(item => item.applicantId === id));
        this.selectedResumes.splice(index, 1);
      } else {
        this.selectedResumes.find(item => item.applicantId === id).status = status;
      }
    }
  }

  setOrganizers(): void {
    if (!this.organizers.length) {
      this.http.get<any>('organizerDetails').subscribe(
        response => {
          this.organizers = response.data;
        },
        error => console.log(error)
      );
    }
  }

  getOrganizers(): Observable<Organizer[]> {
    return of(this.organizers);
  }

  deleteApplicant(applicantId): Observable<any> {
    return this.http.delete(`deleteApplicant/${applicantId}`);
  }
}
