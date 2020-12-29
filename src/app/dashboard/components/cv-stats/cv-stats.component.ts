import { Component, OnDestroy, OnInit } from '@angular/core';
import { CvAnalysisService } from '../../services/cv-analysis.service';
import { allResumes, list } from '../../services/mockData';

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
    this.list = this.cvService.getList();
    this.allResumes = this.cvService.getAllResumes();
    this.filter();
  }

  disp(designation): void {
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
