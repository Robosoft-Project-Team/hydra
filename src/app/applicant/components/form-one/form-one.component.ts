import { FormValidator } from 'src/app/shared/services/form.validator';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';

interface ApplicantFormOne {
  appplicantId: number;
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
    appplicantId: 0,
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private validators: FormValidationService
  ) { }

  ngOnInit(): void {
    this.applicantFormOne = new FormGroup({
      applicantName: new FormControl('', [Validators.required, FormValidator.isValidUsername()]),
      dob: new FormControl('', [Validators.required, FormValidator.isDOBValid()]),
      mobile_no: new FormControl('', [Validators.required, FormValidator.isValidMobileNumber()]),
      emailid: new FormControl('', [Validators.required, FormValidator.isValidEmail()]),
      jobLocation: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      experienceYear: new FormControl(null, Validators.required),
      experienceMonth: new FormControl(null, Validators.required),
      applicationType: new FormControl('Referral', Validators.required),
      reference: new FormControl('', [Validators.required, FormValidator.isValidReference()]),
      languages: new FormControl('', Validators.required),
    });

  }

  get form(): any {
    return this.applicantFormOne.controls;
  }

  setFormData(): void {
    this.formData.applicantName = this.form.applicantName.value || '';
    this.formData.emailid = this.form.emailid.value || '';
    this.formData.dob = this.form.dob.value || '';
    this.formData.mobile_no = this.form.mobile_no.value || '';
    this.formData.jobLocation = this.form.jobLocation.value || '';
    this.formData.gender = this.form.gender.value || '';
    this.formData.designation = this.form.designation.value || '';
    this.formData.experienceYear = this.form.experienceYear?.value || 0;
    this.formData.experienceMonth = this.form.experienceMonths?.value || 0;
    this.formData.applicationType = this.form.applicationType?.value || 'Referral';
    this.formData.reference = this.processReferenceData(this.form.reference?.value) || null;
    this.formData.languages = this.form.languages.value || '';
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

  onSubmit(): void {
    if (this.applicantFormOne.invalid) {
      return;
    }
    this.setFormData();
    console.log(JSON.stringify(this.formData));
    this.router.navigate(['../form-2'], { relativeTo: this.route });
  }
}
