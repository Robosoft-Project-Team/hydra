import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY, MMMM DD',
  },
  display: {
    dateInput: 'YYYY, MMMM DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

interface DashboardData {
  date: moment.Moment;
  user: User;
  notification: Notification[];
  organizers: Organizer[];
  summary: Summary;
}

interface User {
  name: string;
  designation: string;
  image: Image;
  cvCount: number;
}

interface Summary {
  applicants: number;
  shortlisted: number;
  onHold: number;
  rejected: number;
}

interface Organizer {
  image: Image;
  name: string;
  interviewCount: number;
}

interface Notification {
  message: string;
  date: string;
  time: string;
  usersList: Image[];
}

interface Image {
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]

})
export class HomeComponent implements OnInit {

  dashboardData: DashboardData = {
    user: {
      name: 'Renuka Shetty',
      designation: 'Recruiter',
      cvCount: 36,
      image: {
        url: 'https://randomuser.me/api/portraits/women/85.jpg'
      }
    },
    date: moment(),
    summary: {
      applicants: 60,
      shortlisted: 40,
      onHold: 12,
      rejected: 37
    },
    notification: [
      {
        message: 'Campus Interview at Nitte Institution',
        date: moment(new Date(2020, 3, 7)).format('DD MMM, YYYY'),
        time: moment(new Date().getTime()).format('hh:mm A'),
        usersList: [
          { url: 'https://randomuser.me/api/portraits/men/32.jpg' },
          { url: 'https://randomuser.me/api/portraits/men/11.jpg' },
          { url: 'https://randomuser.me/api/portraits/men/24.jpg' }
        ]
      }
    ],
    organizers: [
      {
        image: {
          url: 'https://randomuser.me/api/portraits/women/94.jpg',
        },
        name: 'Raksha',
        interviewCount: 10
      },
      {
        image: {
          url: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        name: 'Nisha',
        interviewCount: 5
      },
      {
        image: {
          url: 'https://randomuser.me/api/portraits/women/25.jpg',
        },
        name: 'Riya',
        interviewCount: 2
      },
      {
        image: {
          url: 'https://randomuser.me/api/portraits/men/14.jpg',
        },
        name: 'Ashwath',
        interviewCount: 2
      }

    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
