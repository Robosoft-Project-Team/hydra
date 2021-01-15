import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RejectedCV } from 'src/app/core/models';
import { CvRejectedService } from 'src/app/dashboard/services/cv-rejected.service';
import { CvAnalysisService } from '../../services/cv-analysis.service';

@Component({
  selector: 'app-cv-rejected',
  templateUrl: './cv-rejected.component.html',
  styleUrls: ['./cv-rejected.component.scss']
})
export class CvRejectedComponent implements OnInit, DoCheck {

  RejectedUserData: RejectedCV[];
  isDataExists = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvAnalysisService: CvAnalysisService,
    private cvRejectedService: CvRejectedService
  ) {
    this.cvRejectedService.getRejectedList().subscribe(
      response => this.RejectedUserData = response
    );
  }

  ngOnInit(): void {
    this.cvRejectedService.setRejectedList();
    this.cvAnalysisService.setOrganizers();
  }

  ngDoCheck(): void {
    this.isDataExists = this.RejectedUserData.length > 0 ? true : false;
  }

  onSearchItem(data: string): void {
    this.cvRejectedService.filterDataOnSearch(data);
  }

  onSelectCard(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  getProfileImage(user: RejectedCV): any {
    const attachment = user.attachmentEntities[0].download_link;
    if (attachment) {
      return attachment.split('0/')[1];
    }
  }
}
