import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-rejected',
  templateUrl: './cv-rejected.component.html',
  styleUrls: ['./cv-rejected.component.scss']
})
export class CvRejectedComponent implements OnInit {

  user = {
    name: 'Kaushik Kumar', designation: 'Product Manager',
    location: 'Bangalore', phone: '+91 9876543210'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
