import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvAnalysisService } from 'src/app/dashboard/services/cv-analysis.service';
import { ResumeCard } from 'src/app/core/models';

@Component({
  selector: 'app-cv-stats',
  templateUrl: './cv-stats.component.html',
  styleUrls: ['./cv-stats.component.scss']
})
export class CvStatsComponent implements OnInit, OnDestroy {

  designationList;
  selectedResume: ResumeCard[] = [];
  selectedDesignation;
  subscription: Subscription;

  constructor(
    private cvService: CvAnalysisService
  ) {
    this.subscription = this.cvService.getSelectedResumes().subscribe(
      response => {
        this.selectedResume = response;
      }
    );
  }

  ngOnInit(): void {
    this.selectedDesignation = this.cvService.getDesignation();
    this.cvService.getDesignationList().subscribe(
      response => {
        this.designationList = response.data;
        if (!this.selectedDesignation) {
          this.selectedDesignation = this.designationList[0].designation;
          this.getApplications(this.designationList[0].id);
        } else {
          const jobId = this.designationList.find(item => item.designation === this.selectedDesignation).id;
          this.getApplications(jobId);
        }
      }
    );
  }

  filterResumes(jobId): void {
    this.selectedDesignation = this.designationList.find(item => item.id === jobId).designation;
    this.getApplications(jobId);
  }

  getLocationString(locationArray): string {
    let LocationString = '';
    locationArray.forEach(element => {
      LocationString += element.location;
      LocationString += '/';
    });
    return LocationString.slice(0, -1);
  }

  getApplications(jobId): void {
    this.cvService.getApplications(jobId);
  }

  ngOnDestroy(): void {
    this.cvService.selectedResumes.splice(0, this.cvService.selectedResumes.length);
    this.subscription.unsubscribe();
  }

}
