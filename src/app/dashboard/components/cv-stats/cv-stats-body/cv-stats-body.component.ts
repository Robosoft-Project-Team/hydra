import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ResumeCard } from 'src/app/core/models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CvAnalysisService } from 'src/app/dashboard/services/cv-analysis.service';

@Component({
  selector: 'app-cv-stats-body',
  templateUrl: './cv-stats-body.component.html',
  styleUrls: ['./cv-stats-body.component.scss']
})
export class CvStatsBodyComponent implements OnInit, OnChanges {
  @Input() resumes;
  totalLength;
  newResume: ResumeCard[];
  shortlistResume: ResumeCard[];
  rejectedResume: ResumeCard[];

  constructor(
    private cv: CvAnalysisService
  ) { }

  ngOnInit(): void {
    // this.filterUsingStatus();

  }

  ngOnChanges(): void {
    this.resetList();
  }

  resetList(): void {
    this.newResume = [];
    this.shortlistResume = [];
    this.rejectedResume = [];
    this.filterUsingStatus();
  }

  filterUsingStatus(): void {
    this.totalLength = this.resumes.length;
    this.resumes.forEach(element => {
      if (!element.deleted) {
        switch (element.status) {
          case 'New': this.newResume.push(element);
                      break;
          case 'Shortlisted': this.shortlistResume.push(element);
                              break;
          case 'Rejected': this.rejectedResume.push(element);
                           break;
          default: break;
        }
      }
    });
  }

  drop(event: CdkDragDrop<ResumeCard[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousContainer.data[event.previousIndex].status === 'New') {
        this.resumes.find((item) => item === event.previousContainer.data[event.previousIndex]).status = 'Rejected';
        this.cv.changeApplicantStatus(event.previousContainer.data[event.previousIndex].applicantId, 'Rejected');
      } else {
        this.resumes.find((item) => item === event.previousContainer.data[event.previousIndex]).status = 'New';
        this.cv.changeApplicantStatus(event.previousContainer.data[event.previousIndex].applicantId, 'New');
      }
      this.resetList();
    }
  }

}
