import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormStorageService } from './form-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  constructor(
    private formStore: FormStorageService,
    private http: HttpClient
  ) { }

  submitForm(): void {
    const obj = this.formStore.getForm('formThree');
    obj.websiteUrl = [
      {
        websiteName: 'facebook',
        url: obj.facebookLink
      },
      {
        websiteName: 'LinkedIn',
        url: obj.linkedInLink
      }
    ];
    delete obj.facebookLink;
    delete obj.linkedInLink;

    return { ...this.formStore.getForm('formOne'), ...this.formStore.getForm('formTwo'), ...obj };
    // this.formStore.resetForms();
  }

  submitDetails(attachments, profileImage): void {
    const formDetails = this.submitForm();
    console.log(attachments);
    console.log(profileImage);
    this.onSubmit(attachments, profileImage, formDetails);
  }

  onSubmit(attachments, profileImage, formDetails): void {
    // formDetails.pincode = '574222';
    console.log(formDetails);
    const formData = new FormData();
    formData.append('CVFiles', attachments);
    formData.append('ImageFile', profileImage);
    formData.append('Applicant', formDetails);

    this.http.post('registration', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
