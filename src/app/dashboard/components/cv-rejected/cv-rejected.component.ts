import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RejectedCV } from 'src/app/core/models';
import { CvRejectedService } from 'src/app/dashboard/services/cv-rejected.service';

@Component({
  selector: 'app-cv-rejected',
  templateUrl: './cv-rejected.component.html',
  styleUrls: ['./cv-rejected.component.scss']
})
export class CvRejectedComponent implements OnInit {

  RejectedUserData: RejectedCV[];
  isDataExists = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvRejectedService: CvRejectedService
  ) {
  }

  ngOnInit(): void {
    this.filterDataOnSearch(null);
  }

  onSearchItem(data: string): void {
    this.filterDataOnSearch(data);
  }

  onSelectCard(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  filterDataOnSearch(search: string): void {
    this.cvRejectedService.getRejectedList().subscribe(
      response => {
        if (search) {
          this.RejectedUserData = response.data.filter(item => {
            return item.applicantName.toLowerCase().includes(search.toLowerCase());
          });
          console.log(this.RejectedUserData, search);
        }
        else {
          this.RejectedUserData = response.data;
        }
        this.isDataExists = this.RejectedUserData.length > 0 ? true : false;
      }
    );
  }
}
