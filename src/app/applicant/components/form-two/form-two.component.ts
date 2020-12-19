import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./form-two.component.scss']
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
          from: new FormControl(''),
          to: new FormControl(''),
          location: new FormControl('')
        }, Validators.required)
      ]),
      educationForm: new FormArray([
        new FormGroup({
          instituitionName: new FormControl(''),
          grade: new FormControl(''),
          from: new FormControl(''),
          to: new FormControl(''),
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
      from: new FormControl(''),
      to: new FormControl(''),
      location: new FormControl('')
    });
    this.workHistory.push(formGroup);
  }

  addEducationForm(): void {
    const formGroup = new FormGroup({
      instituitionName: new FormControl(''),
      grade: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      location: new FormControl('')
    });
    this.educationHistory.push(formGroup);
  }

  fetchDataFromFormArray(formArray: any, data: string): void {
    formArray.controls.forEach((control: FormControl) => {
      this.formData[data].push(control.value);
    });
  }

  setFormData(): void {
    this.fetchDataFromFormArray(this.workHistory, 'workHistory');
    this.fetchDataFromFormArray(this.educationHistory, 'educationHistory');
    this.formData.address = this.addressList.address.value || '';
    this.formData.state = this.addressList.state.value || '';
    this.formData.pincode = this.addressList.pincode.value || '';
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
