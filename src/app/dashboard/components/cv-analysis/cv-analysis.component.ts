import { Router, ActivatedRoute } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { JobSummary } from 'src/app/core/models';
import { CvAnalysisService } from 'src/app/dashboard/services/cv-analysis.service';

@Component({
  selector: 'app-cv-analysis',
  templateUrl: './cv-analysis.component.html',
  styleUrls: ['./cv-analysis.component.scss']
})
export class CvAnalysisComponent implements OnInit {

  tableHeadings: string[] = ['Title', 'Applicants', 'Date', 'Status', 'Location'];
  data: JobSummary[];
  filterDate;
  filterSearch;
  filteredData: JobSummary[];
  selectedDesignation;

  isDataExists = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cvService: CvAnalysisService
  ) {
    this.cvService.getApplicantsData().subscribe(
      response => {
        this.data = response;
      }
    );
  }

  ngOnInit(): void {
    this.filterDate = new Date().toISOString().split('T')[0];
    this.filterSearch = '';
    this.setDataOnDate(this.filterDate);
  }

  onDateSelected(date: string): void {
    this.filterDate = date;
    this.setDataOnDate(this.filterDate);
  }

  onSearchItem(data: string): void {
    this.filterSearch = data;
    this.filterDataOnSearch(this.filterSearch);
  }

  setDataOnDate(date): void {
    this.cvService.setTotalApplicantsData(date)
    .then(() => {
      this.filterDataOnSearch(this.filterSearch);
    });
  }

  filterDataOnSearch(search): void {
    this.filteredData = this.data
          .filter(item => item.designation.toLowerCase().includes(search?.toLowerCase()));
  }

  getLocationString(locationArray): string {
    let LocationString = '';
    locationArray.forEach(element => {
      LocationString += element.location;
      LocationString += '/';
    });
    return LocationString.slice(0, -1);
  }

  onItemSelected(designation: string): void {
    this.cvService.setDesignation(designation);
    this.router.navigate(['stats'], { relativeTo: this.route });
  }

}
