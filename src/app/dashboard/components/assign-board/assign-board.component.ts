import { Component, OnInit } from '@angular/core';
import { AssignBoard } from 'src/app/core/models';
import { CvAnalysisService } from '../../services/cv-analysis.service';

@Component({
  selector: 'app-assign-board',
  templateUrl: './assign-board.component.html',
  styleUrls: ['./assign-board.component.scss']
})
export class AssignBoardComponent implements OnInit {
  tableHeadings: string[] = ['Name', 'Designation', 'Location', 'Assigned Date', 'Organizer'];
  isDataExists = false;
  filteredData: AssignBoard[];

  constructor(
    private cvService: CvAnalysisService
  ) { }

  ngOnInit(): void {
    this.filterDataOnSearch(null);
  }

  onSearchItem(data: string): void {
    this.filterDataOnSearch(data);
  }

  onItemSelected(index: number): void {
    console.log(this.filteredData[index]);
  }

  filterDataOnSearch(search: string): void {
    this.cvService.getAssignedList().subscribe(
      response => {
        if (search) {
          this.filteredData = response.data.filter(item => {
            return item.organizer.toLowerCase().includes(search?.toLowerCase());
          });
          console.log(this.filteredData, search);
        }
        else {
          this.filteredData = response.data;
        }
        this.isDataExists = this.filteredData.length > 0 ? true : false;
      }
    );
  }

}
