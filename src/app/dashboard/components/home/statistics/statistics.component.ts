import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  user = { firstName: 'Renuka', lastName: 'Shetty' };
  numberOfCv = 36;
  labels: string[];

  @Input() count: number;
  @Input() userName: string;
  @Input() date: any;
  constructor() { }

  ngOnInit(): void {
    this.labels = [
      moment().startOf('month').subtract(0, 'month').format('MMM'),
      moment().startOf('month').subtract(1, 'month').format('MMM'),
      moment().startOf('month').subtract(2, 'month').format('MMM'),
      moment().startOf('year').subtract(1, 'year').format('YYYY'),
      moment().startOf('year').subtract(2, 'year').format('YYYY'),
    ];
  }

}
