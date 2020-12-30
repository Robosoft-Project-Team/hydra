import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
        websiteName: 'Facebook',
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
  }

  submitDetails(attachments, profileImage): Observable<any> {
    const formDetails = this.submitForm();
    return this.onSubmit(attachments, profileImage, formDetails);
  }

  onSubmit(attachments, profileImage, formDetails): Observable<any> {
    // formDetails.pincode = '574222';
    // formDetails.educationHistory[0].instituitionName = 'slnp';
    // delete formDetails.educationHistory[0].institutionName;
    // console.log(formDetails);
    // const formDet = {
    //   applicantName: formDetails.applicantName,
    //   emailId: formDetails.emailId,
    //   mobile_no: formDetails.mobile_no,
    //   dob: formDetails.dob,
    //   jobLocation: formDetails.jobLocation,
    //   gender: formDetails.gender,
    //   designation: formDetails.designation,
    //   experienceYear: formDetails.experienceYear,
    //   experienceMonth: formDetails.experienceMonth,
    //   applicationType: formDetails.applicationType,
    //   reference:
    //   {
    //     reference_name: formDetails.reference.reference_name,
    //     reference_desig: formDetails.reference.reference_desig,
    //     reference_mobile: formDetails.reference.reference_mobile,
    //     reference_mail: formDetails.reference.reference_mail
    //   },
    //   languages: formDetails.languages,
    //   address: formDetails.address,
    //   state: formDetails.state,
    //   pincode: formDetails.pincode,
    //   softwares: formDetails.softwares,
    //   skill: formDetails.skill,
    //   aboutYou: formDetails.aboutYou,
    //   currentCTC: formDetails.currentCTC,
    //   expectedCTC: formDetails.expectedCTC,
    //   websiteUrl:
    //     [
    //       {
    //         websiteName: 'Facebook',
    //         url: formDetails.websiteUrl[0].url
    //       }
    //     ],
    //   educationHistory:
    //     [
    //       {
    //         instituitionName: formDetails.educationHistory[0].institutionName,
    //         grade: formDetails.educationHistory[0].grade,
    //         from: formDetails.educationHistory[0].from,
    //         to: formDetails.educationHistory[0].to,
    //         location: formDetails.educationHistory[0].location
    //       }
    //     ],
    //   workHistory: [
    //     {
    //       companyName: formDetails.workHistory[0].companyName,
    //       position: formDetails.workHistory[0].position,
    //       from: formDetails.workHistory[0].from,
    //       to: formDetails.workHistory[0].to,
    //       location: formDetails.workHistory[0].location
    //     }
    //   ]
    // };
    // console.log(formDet);

    const formData = new FormData();
    attachments.forEach((element) => {
      formData.append('CVFiles', element);
    });
    formData.append('ImageFile', profileImage);
    formData.append('Applicant', JSON.stringify(formDetails));
    return this.http.post('registration', formData);
  }

  getDesignationList(): Observable<any> {
    return this.http.get('getDesignationList');
  }
}
