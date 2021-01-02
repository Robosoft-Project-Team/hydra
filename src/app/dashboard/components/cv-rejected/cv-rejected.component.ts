import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { RejectedCV} from 'src/app/core/models/dashboard/rejected-cv.model';
import { CvRejectedService } from '../../services/cv-rejected.service';

@Component({
  selector: 'app-cv-rejected',
  templateUrl: './cv-rejected.component.html',
  styleUrls: ['./cv-rejected.component.scss']
})
export class CvRejectedComponent implements OnInit {

  RejectedUserData : RejectedCV[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvRejectedService : CvRejectedService
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

  details(): void {
    this.router.navigate(['./2'], { relativeTo: this.route});
  }

  // onSearchItem(data: string): void {
  //   console.log(data);
  // }

}
