import { Component, OnInit } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class HeaderComponent implements OnInit {

  filterDate = new FormControl(moment(new Date()));

  constructor() { }

  ngOnInit(): void {
  }

  selectedDate(event: MatDatepickerInputEvent<moment.Moment>): void {
    console.log(event.value.format('DD/MM/YYYY'));
  }

}
