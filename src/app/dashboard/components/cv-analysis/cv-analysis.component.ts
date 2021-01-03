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
    const epoch = new Date(date).getTime();
    this.cvService.getAllCv(this.filterDate).subscribe(
      response => {
        this.data = response.data;
        this.filteredData = response.data.filter(item => item.receivedDate === epoch)
          .filter(item => item.designation.toLowerCase().includes(search?.toLowerCase()));
        this.isDataExists = this.filteredData.length > 0 ? true : false;
      }
    );
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
