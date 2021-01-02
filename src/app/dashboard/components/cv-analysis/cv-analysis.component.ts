import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/core/models/profile.model';
import { Component, OnInit } from '@angular/core';
import { JobSummary } from 'src/app/core/models/job-summary.model';

@Component({
  selector: 'app-cv-analysis',
  templateUrl: './cv-analysis.component.html',
  styleUrls: ['./cv-analysis.component.scss']
})
export class CvAnalysisComponent implements OnInit {

  tableHeadings: string[] = ['Title', 'Applicants', 'Date', 'Status', 'Location'];
  data: JobSummary[] = [
    {
      Title: 'UI/UX design',
      Applicants: 10,
      Date: '2020-03-12',
      Status: true,
      Location: 'Udupi'
    },
    {
      Title: 'PHP Dev',
      Applicants: 10,
      Date: '2020-03-12',
      Status: false,
      Location: 'Udupi/Bangaluru'
    },
    {
      Title: 'UI/UX design',
      Applicants: 99,
      Date: '2020-03-03',
      Status: true,
      Location: 'Udupi'
    },
    {
      Title: 'UI/UX design',
      Applicants: 9,
      Date: '2020-03-12',
      Status: false,
      Location: 'Bangaluru'
    },
    {
      Title: 'UI/UX design',
      Applicants: 10,
      Date: '2020-03-03',
      Status: true,
      Location: 'Mumbai'
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onDateSelected(date: string): void {
    console.log(date);
  }

  onSearchItem(data: string): void {
    console.log(data);
  }

  onItemSelected(index: number): void {
    console.log(this.data[index]);
    this.router.navigate(['stats'], { relativeTo: this.route });
  }

}
