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

  applicant: Applicant;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cv: CvAnalysisService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.applicant = this.cv.getApplicant(id);
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

}
