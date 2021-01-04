import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CvAnalysisService } from 'src/app/dashboard/services/cv-analysis.service';
import { Applicant } from 'src/app/core/models';
import * as fileSaver from 'file-saver';
import { Organizer } from 'src/app/core/models';

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
export class CvDetailsComponent implements OnInit, OnDestroy {

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
    ],
    deleted: false
  };

  buttonTwo = '';
  buttonThree = '';
  showDropdown = false;

  organizers: Organizer[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cv: CvAnalysisService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.cv.getApplicant(id).subscribe(
      response => {
        this.applicant = response.data.applicant;
        this.setButtons(response.data.employee_name);
      }
    );
    this.cv.getOrganizers().subscribe(
      response => {
        this.organizers = response;
      }
    );
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  calculateAge(birthday): number {
    const birthdayArray = birthday.split('/');
    const birthDate = birthdayArray[1] + '-' + birthdayArray[0] + '-' + birthdayArray[2];
    const age = Date.now() - new Date(birthDate).getTime();
    const ageDate = new Date(age);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  dateDifference(from, to): string {
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
    this.cv.getAttachment(url).subscribe(
      response => {
        const blob = new Blob([response], { type: `${attachment.file_type}; charset=utf-8` });
        fileSaver.saveAs(blob, attachment.file_name);
      }
    );
  }

  convertSize(fileSize: number): string {
    return fileSize < 1024000
      ? (fileSize / 1024).toFixed(2) + ' KB'
      : (fileSize / 1024000).toFixed(2) + ' MB';
  }

  setButtons(name): void {
    [this.buttonTwo, this.buttonThree] = ['', ''];
    if (this.applicant.applicationStatus === 'New') {
      [this.buttonTwo, this.buttonThree] = ['Assign To', 'Reject'];
    } else if (this.applicant.applicationStatus === 'Rejected') {
      [this.buttonTwo, this.buttonThree] = ['Recruit', 'Delete'];
    } else {
      this.buttonTwo = 'Assigned To: ' + name;
    }
  }

  buttonTwoFunction(array): any {
    if (!array.length) {
      this.showDropdown = !this.showDropdown;
      return;
    }
    if (array[0] === 'assign' && this.applicant.applicationStatus !== 'Shortlisted') {
      this.cv.assignApplicantToOrganiser(this.applicant.applicantId, array[1].employeeId);
      this.changeStatus('Shortlisted', array[1].name);
    }
    else if (array[0] === 'assign') {
      this.cv.assignApplicantToOrganiser(this.applicant.applicantId, array[1].employeeId);
      this.setButtons(array[1].name);
    } else if (array[0] === 'recruit') {
      this.changeStatus('New');
    }
  }

  buttonThreeFunction(type): void {
    this.showDropdown = false;
    if (type === 'Reject') {
      this.changeStatus('Rejected');
    } else if (type === 'Delete') {
      this.cv.deleteApplicant(this.applicant.applicantId).subscribe(
        response => {
          if (response.status === 200) {
            this.applicant.applicationStatus = 'deleted';
            this.goBack();
          }
        }
      );
    }
  }

  changeStatus(status, name = ''): void {
    this.applicant.applicationStatus = status;
    this.cv.changeApplicantStatus(this.applicant.applicantId, status);
    this.setButtons(name);
  }

  ngOnDestroy(): void {
    this.cv.changeStatusOfSelectedResumes(this.applicant.applicantId, this.applicant.applicationStatus);
  }
}
