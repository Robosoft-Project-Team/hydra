import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { DashboardData, User } from 'src/app/core/models';

interface ResponseData {
  data: any;
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  dashboardData: DashboardData = {
    user: {
      name: 'Renuka Shetty',
      designation: 'Recruiter',
      cvCount: 0,
      image: {
        url: 'https://randomuser.me/api/portraits/women/85.jpg'
      }
    },
    date: moment(),
    summary: {
      applicants: 0,
      shortlisted: 0,
      onHold: 0,
      rejected: 0
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
    organizers: [],
    oldSummary: {
      applicants: [0, 0, 0, 0, 0],
      shortlisted: [0, 0, 0, 0, 0],
      onHold: [0, 0, 0, 0, 0],
      rejected: [0, 0, 0, 0, 0]
    }
  };

  dashboardDataChanged = new Subject<DashboardData>();
  constructor(
    private http: HttpClient
  ) { }

  getData(): DashboardData {
    this.getCVCount();
    this.getOrganizersList();
    this.getSummary(moment().startOf('month'), moment().endOf('month'));
    this.getOldSummary(0, moment().startOf('month'), moment().endOf('month'));
    this.getOldSummary(1, moment().startOf('month'), moment().endOf('month'));
    this.getOldSummary(2, moment().startOf('month'), moment().endOf('month'));
    this.getOldSummary(3, moment().startOf('year'), moment().endOf('year'));
    this.getOldSummary(4, moment().startOf('year'), moment().endOf('year'));
    return this.dashboardData;
  }

  getUser(): User {
    // To be Implemented
    return {} as User;
  }

  getCVCount(): void {
    this.http.get<ResponseData>('newCvCount').subscribe(
      response => {
        if (response.status === 200) {
          this.dashboardData.user.cvCount = response.data;
          this.dashboardDataChanged.next(this.dashboardData);
        }
        else if (response.status === 404) {
          console.log('CV Count not found in ' + response);
        }
      },
      error => {
        console.log(error.message);
      }
    );
  }

  getOrganizersList(): void {
    this.http.get<ResponseData>('organizerDetails').subscribe(
      response => {
        if (response.status === 200) {
          this.dashboardData.organizers = response.data;
          this.dashboardDataChanged.next(this.dashboardData);
        }
        else if (response.status === 404) {
          console.log('CV Count not found in ' + response);
        }
      },
      error => {
        console.log(error.message);
      }
    );
  }

  getSummary(startDate: moment.Moment, endDate: moment.Moment): void {
    const postBody = {
      start: startDate.format('YYYY-MM-DD'),
      end: endDate.format('YYYY-MM-DD')
    };
    this.http.post<ResponseData>('summary', postBody).subscribe(
      response => {
        this.dashboardData.summary.applicants = response.data[0].numberOfApplication;
        this.dashboardData.summary.shortlisted = response.data[1].numberOfApplication;
        this.dashboardData.summary.rejected = response.data[2].numberOfApplication;
        this.dashboardDataChanged.next(this.dashboardData);
      },
      error => {
        console.log(error.message);
      }
    );
  }

  getOldSummary(period: number, startDate: moment.Moment, endDate: moment.Moment): void {
    switch (period) {
      case 0:
        startDate = startDate.subtract(0, 'month');
        endDate = endDate.subtract(0, 'month');
        break;
      case 1:
        startDate = startDate.subtract(1, 'month');
        endDate = endDate.subtract(1, 'month');
        break;
      case 2:
        startDate = startDate.subtract(2, 'month');
        endDate = endDate.subtract(2, 'month');
        break;
      case 3:
        startDate = startDate.subtract(1, 'year');
        endDate = endDate.subtract(1, 'year');
        break;
      case 4:
        startDate = startDate.subtract(2, 'year');
        endDate = endDate.subtract(2, 'year');
        break;
    }
    const postBody = {
      start: startDate.format('YYYY-MM-DD'),
      end: endDate.format('YYYY-MM-DD')
    };
    this.http.post<ResponseData>('summary', postBody).subscribe(
      response => {
        this.dashboardData.oldSummary.applicants[period] = response.data[0].numberOfApplication;
        this.dashboardData.oldSummary.shortlisted[period] = response.data[1].numberOfApplication;
        this.dashboardData.oldSummary.rejected[period] = response.data[2].numberOfApplication * -1;
        this.dashboardDataChanged.next(this.dashboardData);
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
