import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Applicant } from '../shared/interface';
import { applicants } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class CvAnalysisService {

  constructor() { }

  getApplicant(id: number): Applicant {
    return applicants.filter(item => item.applicantId === id)[0];
  }
}
