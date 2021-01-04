import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ResumeCard } from 'src/app/core/models';

@Component({
  selector: 'app-cv-stats-body',
  templateUrl: './cv-stats-body.component.html',
  styleUrls: ['./cv-stats-body.component.scss']
})
export class CvStatsBodyComponent implements OnInit, DoCheck {
  @Input() resumes;
  totalLength;
  newResume: ResumeCard[];
  shortlistResume: ResumeCard[];
  rejectedResume: ResumeCard[];

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
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

}
