import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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
        style({right: '-10%'}),
        animate('0.5s')
      ]),
    ]),
  ],
})
export class CvDetailsComponent implements OnInit {

  id = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  dontGo(): void {
    console.log('no go');
  }

}
