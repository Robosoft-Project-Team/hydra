import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  applicantFormTwo: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.applicantFormTwo = new FormGroup({
      workHistoryForm: new FormArray([
        new FormGroup({
          companyName: new FormControl(''),
          position: new FormControl(''),
          from: new FormControl(''),
          to: new FormControl(''),
          location: new FormControl('')
        })
      ]),
      educationForm: new FormArray([
        new FormGroup({
          instituitionName: new FormControl(''),
          grade: new FormControl(''),
          from: new FormControl(''),
          to: new FormControl(''),
          location: new FormControl('')
        })
      ]),
      addressForm: new FormGroup({
        address: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl('')
      })
    });

    console.log(this.applicantFormTwo.controls);
  }

  get form(): any {
    return this.applicantFormTwo.controls;
  }

  get workHistory(): any {
    return this.applicantFormTwo.get('workHistoryForm');
  }

  addCompanyForm(): void {
    const formGroup = new FormGroup({
      companyName: new FormControl(''),
      position: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      location: new FormControl('')
    });

    this.workHistory.push(formGroup);
  }

  onSubmit(): void {

  }
}
