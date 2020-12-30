import { Component, OnInit } from '@angular/core';
import { CvAnalysisService } from '../../services/cv-analysis.service';

@Component({
  selector: 'app-cv-stats',
  templateUrl: './cv-stats.component.html',
  styleUrls: ['./cv-stats.component.scss']
})
export class CvStatsComponent implements OnInit {

  allResumes;
  list;
  selectedResume = [];
  selectedDesignation;

  constructor(
    private cvService: CvAnalysisService
  ) { }

  ngOnInit(): void {
    this.selectedDesignation = this.cvService.getDesignation();
    this.cvService.getDesignationList().subscribe(
      response => {
        this.list = response.data;
        if (!this.selectedDesignation) {
          this.selectedDesignation = this.list[0].designation;
        }
      }
    );
    this.allResumes = this.cvService.getAllResumes();
    this.filter();
  }

  display(designation): void {
    this.selectedDesignation = designation;
    this.filter();
  }

  filter(): void {
    this.selectedResume = this.allResumes
      .filter(item =>
        item.designation === this.selectedDesignation
      );
  }

}
