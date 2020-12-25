import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-stats-header',
  templateUrl: './cv-stats-header.component.html',
  styleUrls: ['./cv-stats-header.component.scss']
})
export class CvStatsHeaderComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit(): void {
  }

}
