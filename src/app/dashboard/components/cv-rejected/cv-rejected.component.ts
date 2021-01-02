import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RejectedCV } from 'src/app/core/models';
import { CvRejectedService } from '../../services/cv-rejected.service';

@Component({
  selector: 'app-cv-rejected',
  templateUrl: './cv-rejected.component.html',
  styleUrls: ['./cv-rejected.component.scss']
})
export class CvRejectedComponent implements OnInit {

  RejectedUserData: RejectedCV[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvRejectedService: CvRejectedService
  ) {
  }

  ngOnInit(): void {
    this.cvRejectedService.getRejectedList().subscribe(
      response => {
        this.RejectedUserData = response.data;
      }
    );
  }

  onSearchItem(data: string): void {
    console.log(data);
  }

  details(id: number): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  // onSearchItem(data: string): void {
  //   console.log(data);
  // }

}
