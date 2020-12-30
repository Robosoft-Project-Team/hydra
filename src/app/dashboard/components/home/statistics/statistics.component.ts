import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  // date = new Date();
  // month = this.date.getUTCMonth() + 1;
  // day = this.date.getUTCDate();
  // year = this.date.getUTCFullYear();
  // todayDate = this.year + "," + this.month + " " + this.day;

  user = { firstName: 'Renuka', lastName: 'Shetty' };
  numberOfCv = 36;

  summary = {
    applications: [60, 42, 45, 38, 55],
    shortlisted: [35, 10, 24, 22, 23],
    onHold: [15, 12, 20, 10, 15],
    rejected: [-10, -12, -1, -6, -17]
  };

  labels = ['Mar', 'Feb', 'Jan', '2019', '2018'];

  @Input() date: moment.Moment;
  @Input() count: number;
  @Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
