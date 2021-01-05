import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMM YYYY',
  },
  display: {
    dateInput: 'DD MMM YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class CreateEventFormComponent implements OnInit {

  //Reactive Forms
  eventForm: FormGroup;  

  jobLocations = [
    '1.00',
    '2.00',
    '3.00'
  ];
  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const formGroup = new FormGroup({
      event_title: new FormControl('', Validators.required),
      institution_name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      meridiem: new FormControl('', Validators.required),
      description:new FormControl('',Validators.required)
    });
    this.eventForm = formGroup;
  }

  get form(): any {
    return this.eventForm.controls;
  }
}
