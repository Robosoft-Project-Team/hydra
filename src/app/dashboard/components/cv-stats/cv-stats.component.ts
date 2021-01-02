import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-stats',
  templateUrl: './cv-stats.component.html',
  styleUrls: ['./cv-stats.component.scss']
})
export class CvStatsComponent implements OnInit {

  list = [
    {
      designation: 'UI/UX Designer',
      location: 'Udupi'
    },
    {
      designation: 'Figma designer',
      location: 'Udupi'
    },
    {
      designation: 'PHP Developer',
      location: 'Bangaluru'
    },
    {
      designation: 'Angular Dev',
      location: 'Udupi'
    }
  ];

  allResumes = [
    {
      applicantid: 1,
      applicantName: 'Vishwas',
      designation: 'UI/UX Designer',
      skill: 'Photoshop',
      applicationStatus: 'new',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 2,
      applicantName: 'Vishwas',
      designation: 'UI/UX Designer',
      skill: 'Photoshop',
      applicationStatus: 'new',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 4,
      applicantName: 'Vishwas',
      designation: 'UI/UX Designer',
      skill: 'Photoshop',
      applicationStatus: 'shortlist',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 6,
      applicantName: 'Vishwas',
      designation: 'UI/UX Designer',
      skill: 'Photoshop',
      applicationStatus: 'rejected',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 1,
      applicantName: 'Vishwas',
      designation: 'Figma designer',
      skill: 'Photoshop',
      applicationStatus: 'new',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 2,
      applicantName: 'Vishwas',
      designation: 'Figma designer',
      skill: 'Photoshop',
      applicationStatus: 'new',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 3,
      applicantName: 'Vishwas',
      designation: 'Figma designer',
      skill: 'Photoshop',
      applicationStatus: 'rejected',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 4,
      applicantName: 'Vishwas',
      designation: 'Figma designer',
      skill: 'Photoshop',
      applicationStatus: 'shortlist',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 5,
      applicantName: 'Vishwas',
      designation: 'Figma designer',
      skill: 'Photoshop',
      applicationStatus: 'shortlist',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 6,
      applicantName: 'Vishwas',
      designation: 'PHP Developer',
      skill: 'Photoshop,               fh',
      applicationStatus: 'new',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 7,
      applicantName: 'Vishwas',
      designation: 'PHP Developer',
      skill: 'Photoshop',
      applicationStatus: 'new',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 5,
      applicantName: 'Vishwas',
      designation: 'PHP Developer',
      skill: 'Photoshop',
      applicationStatus: 'shortlist',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 4,
      applicantName: 'Vishwas',
      designation: 'Angular Dev',
      skill: 'Photoshop, ui',
      applicationStatus: 'shortlist',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 5,
      applicantName: 'Vishwas',
      designation: 'Angular Dev',
      skill: 'Photoshop',
      applicationStatus: 'shortlist',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    },
    {
      applicantid: 6,
      applicantName: 'Vishwas',
      designation: 'Angular Dev',
      skill: 'Photoshop',
      applicationStatus: 'rejected',
      profilePhoto: 'assets/dashboard-home/icn_hr.png'
    }
  ];

  selectedResume = [];
  index = 0;
  selectedDesignation;

  constructor() { }

  ngOnInit(): void {
    this.disp(0);
  }

  disp(index): void {
    this.index = index;
    this.selectedDesignation = this.list[this.index];

    this.selectedResume = this.allResumes
    .filter(item =>
      item.designation === this.selectedDesignation.designation
    );
    console.log('sele', this.selectedResume);
  }

}
