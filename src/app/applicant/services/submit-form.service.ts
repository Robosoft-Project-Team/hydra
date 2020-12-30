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
    // formDetails.educationHistory[0].instituitionName = 'slnp';
    // delete formDetails.educationHistory[0].institutionName;
    // console.log(formDetails);
    // const formDet = {
    //   applicantName: formDetails.applicantName,
    //   mobile_no: formDetails.mobile_no,
    //   emailId: formDetails.emailId,
    //   dob: formDetails.dob,
    //   jobLocation: formDetails.dob,
    //   gender: formDetails.dob,
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
    //         websiteName: formDetails.websiteUrl[0].websiteName,
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
    // formDet.emailId = 'muktha12345aa12852@gmail.com';
    const formDet = {
      applicantName: 'Mukthaaa',
      emailId: 'muktha12345aa123@gmail.com',
      mobile_no: '1234567890',
      dob: '06/06/06',
      jobLocation: 'Bangalore',
      gender: 'Female',
      designation: 'PHP Developer',
      experienceYear: 2,
      experienceMonth: 0,
      applicationType: 'Referral',
      reference:
      {
        reference_name: 'abc',
        reference_desig: 'desig',
        reference_mobile: 123,
        reference_mail: 'mail'
      },
      languages: 'java,C',
      address: 'address',
      state: 'kar',
      pincode: '56',
      softwares: 'abc',
      skill: 'skill',
      aboutYou: 'y',
      currentCTC: '123',
      expectedCTC: '234',
      websiteUrl:
        [
          {
            websiteName: 'Facebook',
            url: 'soumya@facebook.com'
          },
          {
            websiteName: 'LinkedIn',
            url: 'soumya@linkedin.com'
          },
          {
            websiteName: 'Twitter',
            url: 'soumya@twitter.com'
          },
          {
            websiteName: 'Github',
            url: 'soumya@github.com'
          }
        ],
      educationHistory:
        [
          {
            instituitionName: 'JNV',
            grade: '10',
            from: '2014-06-01',
            to: '2016-06-30',
            location: 'Mangalore'
          },
          {
            instituitionName: 'SJEC',
            grade: '8',
            from: '2016-07-01',
            to: '2020-06-30',
            location: 'Mangalore'
          }
        ],
      workHistory: [
        {
          companyName: 'robo',
          position: 'java',
          from: '2014-06-01',
          to: '2016-06-30',
          location: 'Mangalore'
        }
      ]
    };
    // formDet.emailId = 'muktha12345aa124@gmail.com';
    console.log(formDet);

    const formData = new FormData();
    formData.append('CVFiles', attachments[0]);
    formData.append('ImageFile', profileImage);
    formData.append('Applicant', JSON.stringify(formDet));


    this.http.post('registration', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
