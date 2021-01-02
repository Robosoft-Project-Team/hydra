import { Component, OnInit } from '@angular/core';
// import { MatDatepicker } from '@angular/material/datepicker';
// import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent implements OnInit {

  jobLocations = [
    '1.00',
    '2.00',
    '3.00'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
