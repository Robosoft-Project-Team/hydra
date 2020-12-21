import { SignUpValidators } from '../../../login/components/sign-up/signup.validator';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ApplicantFormThree {
  softwares: string;
  skill: string;
  aboutYou: string;
  currentCTC: string;
  expectedCTC: string;
  facbookLink: string;
  linkedInLink: string;
}

interface SocialWebsite {
  websiteName: string;
  url: string;
}

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {

  // Reactive Forms
  applicantFormThree: FormGroup;
  formError = false;

  formData: ApplicantFormThree = {
    softwares: '',
    skill: '',
    aboutYou: '',
    currentCTC: '',
    expectedCTC: '',
    facbookLink: '',
    linkedInLink: ''
  };

  MOCK_DATA: ApplicantFormThree = {
    softwares: 'C, Java, Python',
    skill: 'Programming, Communication',
    aboutYou: 'Good Team pLayer, Blah Blah Blah',
    currentCTC: '350000',
    expectedCTC: '4000000',
    facbookLink: 'https://www.facebook.com/',
    linkedInLink: 'https://in.linkedin.com/'
  };

  // FileDragDrop
  fileArray = [];
  profileImage: FileList;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.applicantFormThree = new FormGroup({});
    this.populateForm(this.MOCK_DATA);
  }

  get form(): any {
    return this.applicantFormThree.controls;
  }

  populateForm(data: ApplicantFormThree): void {
    const formGroup = new FormGroup({
      softwares: new FormControl(data.softwares, Validators.required),
      skill: new FormControl(data.skill, Validators.required),
      aboutYou: new FormControl(data.aboutYou, Validators.required),
      currentCTC: new FormControl(data.currentCTC, Validators.required),
      expectedCTC: new FormControl(data.expectedCTC, Validators.required),
      facebookLink: new FormControl(data.facbookLink, Validators.required),
      linkedInLink: new FormControl(data.linkedInLink, Validators.required)
    });
    this.applicantFormThree = formGroup;
  }

  getFormData(): void {
    this.formData = this.applicantFormThree.value;
  }

  onSubmit(): void {
    if (this.applicantFormThree.invalid) {
      this.formError = true;
      return;
    }
    this.getFormData();
    console.log(JSON.stringify(this.formData));
    this.router.navigate(['../success'], { relativeTo: this.route });
  }

  goBack(): void {
    this.router.navigate(['../form-2'], { relativeTo: this.route });
  }

  // FileDragDrop
  convertSize(fileSize: number): string {
    return fileSize < 1024000
      ? (fileSize / 1024).toFixed(2) + ' KB'
      : (fileSize / 1024000).toFixed(2) + ' MB';
  }

  reset(index: number): void {
    this.fileArray.splice(index, 1);
  }

  dragDropFile(files): void {
    for (let i = 0; i < files.length; i++) {
      this.fileArray.push(files.item(i));
    }
  }

  uploadImage(files): void {
    this.profileImage = files.item(0);
  }
}

