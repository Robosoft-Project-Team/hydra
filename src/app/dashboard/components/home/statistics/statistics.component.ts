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

  @Input() date: moment.Moment;
  @Input() count: number;
  @Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
