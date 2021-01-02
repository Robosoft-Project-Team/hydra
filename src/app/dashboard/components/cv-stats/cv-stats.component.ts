import { Component, OnInit } from '@angular/core';
import { CvAnalysisService } from '../../services/cv-analysis.service';

@Component({
  selector: 'app-cv-stats',
  templateUrl: './cv-stats.component.html',
  styleUrls: ['./cv-stats.component.scss']
})
export class CvStatsComponent implements OnInit {

  designationList;
  selectedResume = [];
  selectedDesignation;

  constructor(
    private cvService: CvAnalysisService
  ) { }

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
    this.cvService.getApplications(jobId).subscribe(
      response => {
        this.selectedResume = response.data;
      }
    );
  }

}
