import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  resumes = [
    {
      title: 'UI/UX design',
      applicants: 10,
      date: '2020-03-12',
      status: true,
      location: 'Udupi'
    },
    {
      title: 'PHP Dev',
      applicants: 10,
      date: '2020-03-12',
      status: false,
      location: 'Udupi/Bangaluru'
    },
    {
      title: 'UI/UX design',
      applicants: 99,
      date: '2020-03-03',
      status: true,
      location: 'Udupi'
    },
    {
      title: 'UI/UX design',
      applicants: 9,
      date: '2020-03-12',
      status: false,
      location: 'Bangaluru'
    },
    {
      title: 'UI/UX design',
      applicants: 10,
      date: '2020-03-03',
      status: true,
      location: 'Mumbai'
    },
  ];

  resp;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  disp(i): void {
    // const body = {
    //   username: 'soumyasap4@gmail.com',
    //   password: 'pass',
    //   role: 'ROLE_RECRUITER'
    // };
    // this.http.post('http://18.220.120.155:5000/employee/signin', body)
    //   .subscribe(
    //     res => {
    //       let respo;
    //       respo = res;
    //       console.log(respo.status);
    //     }
    //   );
    this.router.navigate(['stats'], {relativeTo: this.route});
  }

}
