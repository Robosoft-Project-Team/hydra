import { SignUpValidators } from '../../../login/components/sign-up/signup.validator';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormStorageService } from '../../services/form-storage.service';
import { SubmitFormService } from '../../services/submit-form.service';

interface ApplicantFormThree {
  softwares: string;
  skill: string;
  aboutYou: string;
  currentCTC: string;
  expectedCTC: string;
  facebookLink: string;
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
    facebookLink: '',
    linkedInLink: ''
  };

  MOCK_DATA: ApplicantFormThree = {
    softwares: 'C, Java, Python',
    skill: 'Programming, Communication',
    aboutYou: 'Good Team pLayer, Blah Blah Blah',
    currentCTC: '350000',
    expectedCTC: '4000000',
    facebookLink: 'https://www.facebook.com/',
    linkedInLink: 'https://in.linkedin.com/'
  };

  // FileDragDrop
  fileArray = [];
  fileSize = 0;
  profileImage: FileList;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formStore: FormStorageService,
    private submitForm: SubmitFormService
  ) { }

  ngOnInit(): void {
    this.applicantFormThree = new FormGroup({});
    if (this.formStore.hasForm('formThree')) {
      this.populateForm(this.formStore.getForm('formThree'));
    } else {
      this.populateForm(this.formData);
    }
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
      facebookLink: new FormControl(data.facebookLink),
      linkedInLink: new FormControl(data.linkedInLink)
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
    this.formStore.storeForm('formThree', this.formData);
    this.submitForm.submitDetails(this.fileArray, this.profileImage);
    if (this.fileArray !== [] && this.profileImage) {
      this.router.navigate(['../success'], { relativeTo: this.route });
    }
  }

  goBack(): void {
    this.getFormData();
    this.formStore.storeForm('formThree', this.formData);
    this.router.navigate(['../form-2'], { relativeTo: this.route });
  }

  // FileDragDrop
  convertSize(fileSize: number): string {
    return fileSize < 1024000
      ? (fileSize / 1024).toFixed(2) + ' KB'
      : (fileSize / 1024000).toFixed(2) + ' MB';
  }

  reset(index: number): void {
    this.fileSize -= this.fileArray[index].size;
    this.fileArray.splice(index, 1);
  }

  dragDropFile(files: FileList): void {
    let file: File;
    for (let i = 0; i < files.length; i++) {
      file = files.item(i);
      if ((this.fileSize + file.size) < 5000000) {
        this.fileArray.push(file);
        this.fileSize += file.size;
      }
    }
    this.fileInput.nativeElement.value = '';
  }

  uploadImage(files): void {
    this.profileImage = files.item(0);
  }
}
