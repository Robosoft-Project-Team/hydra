import { Component, OnInit } from '@angular/core';
import { AssignBoard, Profile } from 'src/app/core/models';
import { CvAnalysisService } from '../../services/cv-analysis.service';

@Component({
  selector: 'app-assign-board',
  templateUrl: './assign-board.component.html',
  styleUrls: ['./assign-board.component.scss']
})
export class AssignBoardComponent implements OnInit {
  tableHeadings: string[] = ['Name', 'Designation', 'Location', 'Assigned Date', 'Organizer'];
  user: Profile = {
    name: 'Renuka Shetty',
    designation: 'Recruiter',
    imageURL: 'https://randomuser.me/api/portraits/women/11.jpg'
  };
  // data: AssignBoard[] = [
  //   {
  //     Name: 'Nithin Anand',
  //     Designation: 'UI/UX Developer',
  //     Location: 'Udupi',
  //     AssignedDate: '2020-03-04',
  //     Organizer: 'Raksha'
  //   },
  //   {
  //     Name: 'John Doe',
  //     Designation: 'Angular Developer',
  //     Location: 'Bangalore',
  //     AssignedDate: '2020-03-04',
  //     Organizer: 'Ashwath'
  //   },
  //   {
  //     Name: 'Rajesh Gangoli',
  //     Designation: 'Angular Developer',
  //     Location: 'Udupi',
  //     AssignedDate: '2020-03-04',
  //     Organizer: 'Ashwath'
  //   },
  //   {
  //     Name: 'Vikas Rao',
  //     Designation: 'React.js Developer',
  //     Location: 'Udupi',
  //     AssignedDate: '2020-03-03',
  //     Organizer: 'Nisha'
  //   },
  //   {
  //     Name: 'Jim Doe',
  //     Designation: 'iOS Developer',
  //     Location: 'Bangalore',
  //     AssignedDate: '2020-03-04',
  //     Organizer: 'Riya'
  //   },
  //   {
  //     Name: 'Krishna',
  //     Designation: 'Java Developer',
  //     Location: 'Udupi',
  //     AssignedDate: '2020-04-04',
  //     Organizer: 'Raksha'
  //   },
  //   {
  //     Name: 'Shreyas Raj',
  //     Designation: 'PHP Developer',
  //     Location: 'Bangalore',
  //     AssignedDate: '2020-03-02',
  //     Organizer: 'Riya'
  //   }
  // ];

  data: AssignBoard[];
  constructor(
    private cvService: CvAnalysisService
  ) { }

  ngOnInit(): void {
    this.cvService.getAssignedList().subscribe(
      response => {
        this.data = response.data;
      }
    );
  }

  onSearchItem(data: string): void {
    console.log(data);
  }

  onItemSelected(index: number): void {
    console.log(this.data[index]);
  }

}
