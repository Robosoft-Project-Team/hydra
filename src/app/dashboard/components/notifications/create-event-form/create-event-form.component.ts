import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEventService } from 'src/app/dashboard/services/create-event.service';

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

  members: any[] = [];

  time: string;
  meridiem: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: CreateEventService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      eventDate: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.eventForm = formGroup;
  }

  get form(): any {
    return this.eventForm.controls;
  }

  // onSubmit():void{
  //   this.eventService.CreateEvent(this.eventForm.value)
    
  // }

  onSubmit(): void {
    if (this.eventForm.invalid) {
      return;
    }
    const selectedMembers = [
      {
        empUsername: 'vishwas.prabhu@robosoftin.com'
      },
      {
        empUsername: 'sharathkumar.kr@robosoftin.com'
      },
      {
        empUsername: 'pooja.bs@robosoftin.com'
      }
    ];
    const formData = {
      ...this.eventForm.value,
      eventTime: `${this.time}:00 ${this.meridiem}`,
      members: selectedMembers
    };
    this.eventService.createEvent(formData)
    .subscribe(
      response=>{
        if(response.status===200){}
        else if(response.status===404){
          console.error(Message);          
        }
      }
    );
  }

  addMember(): void {
    this.eventService.getMemberList()
      .subscribe(
        response => {
          this.members = response.data;
          console.log(this.members);
        }
      );
  }
}
