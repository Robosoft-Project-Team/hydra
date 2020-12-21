import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';
import { FormStorageService } from '../../services/form-storage.service';

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
  grade: number;
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
  showError = false;

  // Initial Form Data
  formData = {
    workHistory: [
      {
        companyName: '',
        position: '',
        from: moment().format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
        location: ''
      }
    ],
    educationHistory: [
      {
        institutionName: '',
        grade: null,
        from: moment().format('YYYY-MM-DD'),
        to: moment().format('YYYY-MM-DD'),
        location: ''
      }
    ],
    address: '',
    state: '',
    pincode: ''
  };

  MOCK_DATA_FROM_SERVICE = {
    workHistory: [
      {
        companyName: 'Robosofot Technologies',
        position: 'Software Engineer',
        from: '1998-10-25',
        to: '2007-08-15',
        location: 'Udupi'
      }
    ],
    educationHistory: [
      {
        institutionName: 'St. Xaviers College of Engineering',
        grade: 8.4,
        from: '1995-10-25',
        to: '1998-9-25',
        location: 'Bangalore'
      }
    ],
    address: 'Mangalore',
    state: 'Karnataka',
    pincode: '547555'
  };

  // Default Date Settings
  minDate = new Date(1960, 0, 1);
  maxDate = new Date(2040, 0, 1);
  startDate = new Date(2017, 0, 1);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formStore: FormStorageService
  ) { }

  ngOnInit(): void {
    // Reactive Form Template
    this.applicantFormTwo = new FormGroup({
      workHistoryForm: new FormArray([]),
      educationForm: new FormArray([]),
      addressForm: new FormGroup({})
    });

    // Populate the form with data if present
    // Else Initialize with default data

    if (this.formStore.hasForm('formTwo')) {
      this.populateForm(this.formStore.getForm('formTwo'));
      console.log(this.formStore.getForm('formTwo'));
    } else {
      this.populateForm(this.formData);

    }
  }

  // Get Form Controls
  get form(): any {
    return this.applicantFormTwo.controls;
  }

  // Get Work History FormArray => [(controls/values), valid]
  get workHistory(): any {
    return (this.applicantFormTwo.get('workHistoryForm') as FormArray);
  }

  // Get Education History FormArray => [(controls/values), valid]
  get educationHistory(): any {
    return (this.applicantFormTwo.get('educationForm') as FormArray);
  }

  // Get Address FormGroup => (controls/values)
  get addressList(): any {
    return (this.applicantFormTwo.get('addressForm') as FormGroup);
  }

  // Add New Company Form
  addCompanyForm = (data: WorkHistory): void => {
    const formGroup = new FormGroup({
      companyName: new FormControl(data?.companyName || '', Validators.required),
      position: new FormControl(data?.position || '', Validators.required),
      from: new FormControl( data ? moment(data.from, 'YYYY-MM-DD') : moment(), Validators.required),
      to: new FormControl(data ? moment(data.to, 'YYYY-MM-DD') : moment(), Validators.required),
      location: new FormControl(data?.location || '', Validators.required)
    });
    this.workHistory.push(formGroup);
  }

  // Add New Education Form
  addEducationForm = (data: EducationHistory): void => {
    const formGroup = new FormGroup({
      institutionName: new FormControl(data?.institutionName || '', Validators.required),
      grade: new FormControl(data?.grade || null, Validators.required),
      from: new FormControl(data ? moment(data.from, 'YYYY-MM-DD') : moment(), Validators.required),
      to: new FormControl(data ? moment(data.to, 'YYYY-MM-DD') : moment(), Validators.required),
      location: new FormControl(data?.location || '', Validators.required)
    });
    this.educationHistory.push(formGroup);
  }

  // Setup Address Form Group
  addAddressForm(address: string, state: string, pincode: string): void {
    const formGroup = new FormGroup({
      address: new FormControl(address || '', Validators.required),
      state: new FormControl(state || '', Validators.required),
      pincode: new FormControl(pincode || null, [Validators.required, Validators.min(100000), Validators.max(999999)])
    });
    this.form.addressForm = formGroup;
  }

  // Format and Fetch data from Form Arrays
  fetchDataFromFormArray(formArray: any, key: string): void {
    formArray.value.forEach((item: any) => {
      item.from = item?.from.format('YYYY-MM-DD');
      item.to = item?.to.format('YYYY-MM-DD');
    });
    this.formData[key] = formArray.value;
  }

  // Fill the Form with default data or fetched data
  populateForm(data: ApplicantFormTwo): void {
    data.workHistory?.forEach((item: WorkHistory) => {
      this.addCompanyForm(item);
    });
    data.educationHistory?.forEach((item: EducationHistory) => {
      this.addEducationForm(item);
    });
    this.addAddressForm(data.address, data.state, data.pincode);
  }

  // Fetch Data of the form on Submit
  getFormData(): void {
    this.fetchDataFromFormArray(this.workHistory, 'workHistory');
    this.fetchDataFromFormArray(this.educationHistory, 'educationHistory');
    this.formData = { ...this.formData, ...this.addressList.value };
  }

  goBack(): void {
    this.getFormData();
    this.formStore.storeForm('formTwo', this.formData);
    this.router.navigate(['../form-1'], { relativeTo: this.route });
  }

  onSubmit(): void {
    if (!this.applicantFormTwo.valid) {
      this.showError = true;
      return;
    }
    this.getFormData();
    console.log(JSON.stringify(this.formData));
    this.router.navigate(['../form-3'], { relativeTo: this.route });
  }

  // Handlers for Date Formatting and Input
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

  isValid(referance, refFunction): void {
    console.log(referance);
    const lastIndex = referance.length - 1;
    if (!referance[lastIndex].invalid) {
      refFunction();
    }
    // console.log(referance[lastIndex].invalid);
  }
}
