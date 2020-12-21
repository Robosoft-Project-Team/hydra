import { FormValidator } from 'src/app/shared/services/form.validator';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormStorageService } from '../../services/form-storage.service';

interface ApplicantFormOne {
  applicantName: string;
  emailid: string;
  mobile_no: string;
  dob: string;
  jobLocation: string;
  gender: string;
  designation: string;
  experienceYear: number;
  experienceMonth: number;
  applicationType: string;
  reference: Reference;
  languages: string;
}

interface Reference {
  reference_name: string;
  reference_desig: string;
  reference_mobile: string;
  reference_mail: string;
}

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {

  // Mock Data
  jobLocations = [
    'Bangalore',
    'Mumbai',
    'Udupi'
  ];

  genders = [
    'Male',
    'Female',
    'Others'
  ];

  // Reactive Forms
  applicantFormOne: FormGroup;
  formData: ApplicantFormOne = {
    applicantName: '',
    emailid: '',
    mobile_no: '',
    dob: '',
    jobLocation: '',
    gender: '',
    designation: '',
    experienceYear: 0,
    experienceMonth: 0,
    applicationType: '',
    reference: {
      reference_name: '',
      reference_desig: '',
      reference_mobile: '',
      reference_mail: '',
    },
    languages: '',
  };

  MOCK_DATA_FROM_SERVICE = {
    applicantName: 'John',
    emailid: 'john@hmail.co',
    mobile_no: '8855664488',
    dob: '10/06/1998',
    jobLocation: 'Udupi',
    gender: 'Others',
    designation: 'Engineer',
    experienceYear: 6,
    experienceMonth: 3,
    applicationType: 'Organizer',
    reference: {
      reference_name: 'Jim Doe',
      reference_desig: 'Engineer',
      reference_mobile: '8855664455',
      reference_mail: 'jim@test.com'
    },
    languages: 'English, Spanish'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formStore: FormStorageService
  ) { }

  ngOnInit(): void {
    this.applicantFormOne = new FormGroup({});
    this.populateForm(this.formData);

    if (this.formStore.hasForm('formOne')){
      this.populateForm(this.formStore.getForm('formOne'));
    }
  }

  get form(): any {
    return this.applicantFormOne.controls;
  }

  populateForm(data: ApplicantFormOne): void {
    const formGroup = new FormGroup({
      applicantName: new FormControl(data.applicantName, [Validators.required, FormValidator.isValidUsername()]),
      dob: new FormControl(data.dob, [Validators.required, FormValidator.isDOBValid()]),
      mobile_no: new FormControl(data.mobile_no, [Validators.required, FormValidator.isValidMobileNumber()]),
      emailid: new FormControl(data.emailid, [Validators.required, FormValidator.isValidEmail()]),
      jobLocation: new FormControl(data ? data.jobLocation : '', Validators.required),
      gender: new FormControl(data ? data.gender : '', Validators.required),
      designation: new FormControl(data.designation, Validators.required),
      experienceYear: new FormControl(data.experienceYear, Validators.required),
      experienceMonth: new FormControl(data.experienceMonth, Validators.required),
      applicationType: new FormControl(data.applicationType, Validators.required),
      reference: new FormControl(this.formatReference(data.reference), [Validators.required, FormValidator.isValidReference()]),
      languages: new FormControl(data.languages, Validators.required),
    });
    this.applicantFormOne = formGroup;
  }

  getFormData(): ApplicantFormOne {
    return { ...this.applicantFormOne.value, reference: this.processReferenceData(this.form.reference?.value) };
  }

  onSubmit(): void {
    if (this.applicantFormOne.invalid) {
      return;
    }
    console.log(JSON.stringify(this.getFormData()));
    this.formStore.storeForm('formOne', this.getFormData());
    this.router.navigate(['../form-2'], { relativeTo: this.route });
  }

  formatReference(reference: Reference): string {
    if (reference.reference_name) {
      return `${reference.reference_name},${reference.reference_desig},${reference.reference_mobile},${reference.reference_mail}`;
    }
    return '';
  }

  processReferenceData(value: string): Reference {
    const splitValues = value.split(',').map((item: string) => item.trim());
    const data: Reference = {
      reference_name: splitValues[0],
      reference_desig: splitValues[1],
      reference_mobile: splitValues[2],
      reference_mail: splitValues[3]
    };
    return data;
  }

  maskDoB(value: string): void {
    const v = value;
    if (v.match(/^\d{2}$/) !== null) {
      value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      value = v + '/';
    }
    this.form.dob.patchValue(value);
  }
}
