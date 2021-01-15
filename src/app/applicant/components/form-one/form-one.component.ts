import { FormValidator } from 'src/app/shared/services/form.validator';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormStorageService } from '../../services/form-storage.service';
import { HttpClient } from '@angular/common/http';
import { SubmitFormService } from '../../services/submit-form.service';

interface ApplicantFormOne {
  applicantName: string;
  emailId: string;
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
  isOpen = false;

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

  jobDesignations: string[] = [];

  selectedLocation = this.jobLocations[0];
  selectedGender = this.genders[0];
  selectedDesignation = this.jobDesignations[0];

  // Reactive Forms
  applicantFormOne: FormGroup;
  formData: ApplicantFormOne = {
    applicantName: '',
    emailId: '',
    mobile_no: '',
    dob: '',
    jobLocation: this.selectedLocation,
    gender: this.selectedGender,
    designation: this.selectedDesignation,
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
    private formStore: FormStorageService,
    private submitService: SubmitFormService
  ) { }

  ngOnInit(): void {
    this.applicantFormOne = new FormGroup({});
    this.populateForm(this.formData);

    if (this.formStore.hasForm('formOne')) {
      this.populateForm(this.formStore.getForm('formOne'));
    }

    this.submitService.getDesignationList().subscribe(
      response => {
        response.data.forEach(element => {
          this.jobDesignations.push(element.designation);
        });
      },
      error => console.log(error)
    );
  }

  get form(): any {
    return this.applicantFormOne.controls;
  }

  populateForm(data: ApplicantFormOne): void {
    const formGroup = new FormGroup({
      applicantName: new FormControl(data.applicantName, [Validators.required, FormValidator.isValidUsername()]),
      dob: new FormControl(data.dob, [Validators.required, FormValidator.isDOBValid()]),
      mobile_no: new FormControl(data.mobile_no, [Validators.required, FormValidator.isValidMobileNumber()]),
      emailId: new FormControl(data.emailId, [Validators.required, FormValidator.isValidEmail()]),
      experienceYear: new FormControl(data.experienceYear, Validators.required),
      experienceMonth: new FormControl(data.experienceMonth, Validators.required),
      applicationType: new FormControl(data.applicationType, Validators.required),
      reference: new FormControl(this.formatReference(data.reference), [Validators.required, FormValidator.isValidReference()]),
      languages: new FormControl(data.languages, Validators.required),
    });
    this.applicantFormOne = formGroup;
    this.selectedLocation = data.jobLocation;
    this.selectedGender = data.gender;
    this.selectedDesignation = data.designation;
  }

  getFormData(): ApplicantFormOne {
    return {
      ...this.applicantFormOne.value,
      reference: this.processReferenceData(this.form.reference?.value),
      gender: this.selectedGender,
      jobLocation: this.selectedLocation,
      designation: this.selectedDesignation
    };
  }

  onSubmit(): void {
    if (this.applicantFormOne.invalid) {
      return;
    }
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
