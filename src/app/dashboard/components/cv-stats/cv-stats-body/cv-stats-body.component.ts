import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-stats-body',
  templateUrl: './cv-stats-body.component.html',
  styleUrls: ['./cv-stats-body.component.scss']
})
export class CvStatsBodyComponent implements OnInit, OnChanges {
  @Input() resumes;
  totalLength;
  newResume;
  shortlistResume;
  rejectedResume;

  constructor() { }

  ngOnInit(): void {
    // this.resetList();
    // this.divideByStatus();
  }

  ngOnChanges(): void {
    this.resetList();
  }

  resetList(): void {
    this.newResume = [];
    this.shortlistResume = [];
    this.rejectedResume = [];
    this.divideByStatus();
  }

  divideByStatus(): void {
    console.log(this.resumes);
    this.totalLength = this.resumes.length;
    this.resumes.forEach(element => {
      switch (element.applicationStatus) {
        case 'new': this.newResume.push(element);
                    break;
        case 'shortlist': this.shortlistResume.push(element);
                          break;
        case 'rejected': this.rejectedResume.push(element);
                         break;
        default: break;
      }
    });
  }

}
