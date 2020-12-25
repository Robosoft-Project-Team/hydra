import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss']
})
export class CvDetailsComponent implements OnInit {

  id = 0;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
  }

}
