import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CvAnalysisService } from '../../services/cv-analysis.service';
import { Applicant } from '../../shared/interface';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        right: '0%'
      })),
      transition('* => open', [
        style({ right: '-5%' }),
        animate('0.2s')
      ]),
    ]),
    trigger('overlay', [
      state('show', style({
        opacity: 1
      })),
      transition('* => show', [
        style({ opacity: 0 }),
        animate('0.5s')
      ]),
    ]),
  ],
})
export class CvDetailsComponent implements OnInit {

  applicant: Applicant = {
    applicantName: '',
    applicantId: 0,
    emailId: '',
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
      reference_mail: ''
    },
    address: '',
    languages: '',
    state: '',
    pincode: '',
    softwares: '',
    skill: '',
    aboutYou: '',
    currentCTC: '',
    expectedCTC: '',
    applicationStatus: '',
    submitDate: '',
    assigned: 0,
    websiteUrl: [
      {
        websiteName: '',
        url: ''
      }
    ],
    educationHistory: [
      {
        instituitionName: '',
        grade: '',
        from: '',
        to: '',
        location: ''
      }
    ],
    workHistory: [
      {
        companyName: '',
        position: '',
        from: '',
        to: '',
        location: ''
      }
    ],
    attachmentEntities: [
      {
        file_name: '',
        file_type: '',
        file_size: 0,
        download_link: '',
        type: ''
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cv: CvAnalysisService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.cv.getApplicant(47).subscribe(
      response => {
        this.applicant = response.data.applicant;
      }
    );
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  dontGo(): void {
    console.log('no go');
  }

  calculateAge(birthday): number {
    const birthdayArray = birthday.split('/');
    const birthDate = birthdayArray[1] + '-' + birthdayArray[0] + '-' + birthdayArray[2];
    const age = Date.now() - new Date(birthDate).getTime();
    const ageDate = new Date(age);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  diff(from, to): string {
    const fromDateArray = from.split('-');
    const toDateArray = to.split('-');
    const monthDiff = +toDateArray[1] - +fromDateArray[1];
    const yearDiff = +toDateArray[0] - +fromDateArray[0];
    if (monthDiff < 0) {
      return `${yearDiff - 1} y ${monthDiff + 12} m`;
    } else {
      return `${yearDiff} y ${monthDiff} m`;
    }
  }

  downloadAttachment(index): void {
    const attachment = this.applicant.attachmentEntities[index];
    const url = attachment.download_link.split('0/')[1];
    const filename = url.split('/')[2];
    this.cv.getAttachment(url).subscribe(
      response => {
        const blob = new Blob([response], { type: `${attachment.file_type}; charset=utf-8` });
        const respurl = window.URL.createObjectURL(blob);
        fileSaver.saveAs(blob, filename);
      }
    );
  }

}
