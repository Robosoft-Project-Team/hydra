import { Injectable } from '@angular/core';
import { FormStorageService } from './form-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  constructor(private formStore: FormStorageService) { }

  submitForm(): void {
    console.log({...this.formStore.getForm('formOne'), ...this.formStore.getForm('formTwo'), ...this.formStore.getForm('formThree')});
    this.formStore.resetForms();
  }

  submitFiles(attachments, profileImage): void {
    console.log(attachments);
    console.log(profileImage);
  }
}
