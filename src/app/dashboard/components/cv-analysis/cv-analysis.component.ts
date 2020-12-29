import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/core/models/profile.model';
import { Component, OnInit } from '@angular/core';
import { JobSummary } from 'src/app/core/models/job-summary.model';
import { CvAnalysisService } from '../../services/cv-analysis.service';

@Component({
  selector: 'app-cv-analysis',
  templateUrl: './cv-analysis.component.html',
  styleUrls: ['./cv-analysis.component.scss']
})
export class CvAnalysisComponent implements OnInit {

  tableHeadings: string[] = ['Title', 'Applicants', 'Date', 'Status', 'Location'];
  data: JobSummary[] = [
    {
      Title: 'UI/UX Designer',
      Applicants: 10,
      Date: '2020-12-27',
      Status: true,
      Location: 'Udupi'
    },
    {
      Title: 'PHP Developer',
      Applicants: 10,
      Date: '2020-12-27',
      Status: false,
      Location: 'Udupi/Bangaluru'
    },
    {
      Title: 'UI/UX design',
      Applicants: 99,
      Date: '2020-12-27',
      Status: true,
      Location: 'Udupi'
    },
    {
      Title: 'UI/UX design',
      Applicants: 9,
      Date: '2020-12-27',
      Status: false,
      Location: 'Bangaluru'
    },
    {
      Title: 'UI/UX Designer',
      Applicants: 10,
      Date: '2020-12-28',
      Status: true,
      Location: 'Mumbai'
    },
  ];

  filterDate;
  filterSearch;
  filteredData: JobSummary[];
  selectedDesignation;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cvService: CvAnalysisService
  ) {
  }

  ngOnInit(): void {
    this.filterDate = new Date().toISOString().split('T')[0];
    this.filterSearch = '';
    this.filterDataOnSearch(this.filterDate, this.filterSearch);
  }

  onDateSelected(date: string): void {
    this.filterDate = date;
    this.filterDataOnSearch(this.filterDate, this.filterSearch);
  }

  onSearchItem(data: string): void {
    this.filterSearch = data;
    this.filterDataOnSearch(this.filterDate, this.filterSearch);
  }

  filterDataOnSearch(date, search): void {
    this.filteredData = this.data.filter(item => item.Date === date)
    .filter(item => item.Title.toLowerCase().includes(search.toLowerCase()));
  }

  onItemSelected(designation: string): void {
    this.cvService.setDesignation(designation);
    this.router.navigate(['stats'], { relativeTo: this.route });
  }

}
