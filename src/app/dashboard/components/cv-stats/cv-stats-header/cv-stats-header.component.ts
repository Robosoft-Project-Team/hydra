import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cv-stats-header',
  templateUrl: './cv-stats-header.component.html',
  styleUrls: ['./cv-stats-header.component.scss']
})
export class CvStatsHeaderComponent implements OnInit {
  title: string;
  private routeSub: Subscription;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      console.log(params.designation);
      this.title = params.designation;
    });
  }

}
