import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSearchItem(data: string): void {
    console.log(data);
  }

  details(): void {
    this.router.navigate(['./2'], { relativeTo: this.route});
  }


  // ngOnInit(): void {
  // }

  // onSearchItem(data: string): void {
  //   console.log(data);
  // }

}
