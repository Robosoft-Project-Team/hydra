import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

interface ApplicantFormTwo {
  workHistory: WorkHistory[];
  educationHistory: EducationHistory[];
  address: string;
  state: string;
  pincode: string;
}

interface WorkHistory {
  companyName: string;
  position: string;
  from: string;
  to: string;
  location: string;
}

interface EducationHistory {
  institutionName: string;
  grade: string;
  from: string;
  to: string;
  location: string;
}

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class FormTwoComponent implements OnInit {
  applicantFormTwo: FormGroup;

  formData = {
    workHistory: [],
    educationHistory: [],
    address: '',
    state: '',
    pincode: ''
  };

  // Default Date Settings
  minDate = new Date(1960, 0, 1);
  maxDate = new Date(2040, 0, 1);
  startDate = new Date(2017, 0, 1);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.applicantFormTwo = new FormGroup({
      workHistoryForm: new FormArray([
        new FormGroup({
          companyName: new FormControl(''),
          position: new FormControl(''),
          from: new FormControl(moment()),
          to: new FormControl(moment()),
          location: new FormControl('')
        }, Validators.required)
      ]),
      educationForm: new FormArray([
        new FormGroup({
          instituitionName: new FormControl(''),
          grade: new FormControl(''),
          from: new FormControl(moment()),
          to: new FormControl(moment()),
          location: new FormControl('')
        }, Validators.required)
      ]),
      addressForm: new FormGroup({
        address: new FormControl(''),
        state: new FormControl(''),
        pincode: new FormControl('')
      }, Validators.required)
    });
  }

  get form(): any {
    return this.applicantFormTwo.controls;
  }

  get workHistory(): any {
    return this.applicantFormTwo.get('workHistoryForm');
  }

  get educationHistory(): any {
    return this.applicantFormTwo.get('educationForm');
  }

  get addressList(): any {
    return this.form.addressForm.controls;
  }

  addCompanyForm(): void {
    const formGroup = new FormGroup({
      companyName: new FormControl(''),
      position: new FormControl(''),
      from: new FormControl(moment()),
      to: new FormControl(moment()),
      location: new FormControl('')
    });
    this.workHistory.push(formGroup);
  }

  addEducationForm(): void {
    const formGroup = new FormGroup({
      instituitionName: new FormControl(''),
      grade: new FormControl(''),
      from: new FormControl(moment()),
      to: new FormControl(moment()),
      location: new FormControl('')
    });
    this.educationHistory.push(formGroup);
  }

  fetchDataFromFormArray(formArray: any, data: string): void {
    formArray.controls.forEach((control: FormControl) => {
      this.formData[data].push(control.value);
    });
  }

  formatDate(item: string): void {
    this.formData[item].forEach((key: any, value: any) => {
      key.from = key?.from.format('YYYY-MM-DD');
      key.to = key?.to.format('YYYY-MM-DD');
      console.log(key.from, key.to);
    });
  }

  setFormData(): void {
    this.fetchDataFromFormArray(this.workHistory, 'workHistory');
    this.fetchDataFromFormArray(this.educationHistory, 'educationHistory');
    this.formData.address = this.addressList.address.value || '';
    this.formData.state = this.addressList.state.value || '';
    this.formData.pincode = this.addressList.pincode.value || '';
    this.formatDate('workHistory');
    this.formatDate('educationHistory');
  }

  chosenYearHandler(normalizedYear: moment.Moment, control: any): void {
    const ctrlValue = control.value;
    ctrlValue.year(normalizedYear.year());
    control.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>, control: any): void {
    const ctrlValue = control.value;
    ctrlValue.month(normalizedMonth.month());
    control.setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit(): void {
    if (this.applicantFormTwo.invalid) {
      return;
    }
    this.setFormData();
    console.log(JSON.stringify(this.formData));
    this.router.navigate(['../form-3'], { relativeTo: this.route });
  }
}
