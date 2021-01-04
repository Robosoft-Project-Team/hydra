import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RejectedCV } from 'src/app/core/models';
import { CvRejectedService } from 'src/app/dashboard/services/cv-rejected.service';

@Component({
  selector: 'app-cv-rejected',
  templateUrl: './cv-rejected.component.html',
  styleUrls: ['./cv-rejected.component.scss']
})
export class CvRejectedComponent implements OnInit, DoCheck {

  RejectedUserData: RejectedCV[];
  allRejectedCV: RejectedCV[];
  isDataExists = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvRejectedService: CvRejectedService
  ) {
    this.cvRejectedService.getRejectedList().subscribe(
      response => this.allRejectedCV = response
    );
  }

  ngOnInit(): void {
    this.cvRejectedService.setRejectedList();
  }

  ngDoCheck(): void {
    this.RejectedUserData = this.allRejectedCV;
    this.isDataExists = this.RejectedUserData.length > 0 ? true : false;
  }

  onSearchItem(data: string): void {
    this.filterDataOnSearch(data);
  }

  onSelectCard(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  filterDataOnSearch(search: string): void {
    // this.RejectedUserData = this.allRejectedCV.filter(item => {
    //   return item.applicantName.toLowerCase().includes(search?.toLowerCase());
    // });
    // console.log(this.RejectedUserData);
  }

  getProfileImage(user: RejectedCV): any {
    const attachment = user.attachmentEntities[0].download_link;
    if (attachment) {
      return attachment.split('0/')[1];
    }
  }
}
