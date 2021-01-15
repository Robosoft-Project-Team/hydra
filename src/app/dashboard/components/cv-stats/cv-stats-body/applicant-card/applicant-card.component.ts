import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss']
})
export class ApplicantCardComponent implements OnInit {

  @Input() card;
  skills;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.skills = this.card.skills.split(',');
  }

  getImageEndPoint(attachment): string {
    return attachment.download_link.split('0/')[1];
  }

  displayDetails(id): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}
