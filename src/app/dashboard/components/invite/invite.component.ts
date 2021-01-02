import { Component, OnInit } from '@angular/core';
import { sendInvite } from 'src/app/core/models';
import { SentInviteService } from 'src/app/dashboard/services/sent-invite.service';
import * as moment from 'moment';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  constructor(private sentInvite: SentInviteService) { }

  // start = "2020-05-01"
  //  end = "2020-12-25"

  start: any;
  end: any;
  selectedIndex = 0;

  invitedCandidates: sendInvite[];
  inviteeCountList: any[] = [];

  list: any[] = [];

  disp(index: number): void {
    this.selectedIndex = index;
    console.log('selInd', this.selectedIndex);
    this.getDate(this.selectedIndex);

    this.sentInvite.getInvitedList(this.start, this.end).subscribe(
      response => {
        this.invitedCandidates = response.data;
        console.log(this.invitedCandidates);
      }
    );



  }

  getDate(period: number): void {
    switch (period) {
      case 1:
        this.start = moment().format('YYYY-MM-DD');
        this.end = moment().format('YYYY-MM-DD');
        console.log('start=', this.start, 'end=', this.end);
        break;
      case 2:
        this.start = moment().subtract(1, 'day').startOf('day').format('YYYY-MM-DD');
        this.end = moment().subtract(1, 'day').endOf('day').format('YYYY-MM-DD');
        console.log('start=', this.start, 'end=', this.end);
        break;
      case 3:
        this.start = moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
        this.end = moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
        console.log('start=', this.start, 'end=', this.end);
        break;
      case 4:
        this.start = moment().subtract(2, 'month').startOf('month').format('YYYY-MM-DD');
        this.end = moment().subtract(2, 'month').endOf('month').format('YYYY-MM-DD');
        console.log('start=', this.start, 'end=', this.end);
        break;
      case 5:
        this.start = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
        this.end = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
        console.log('start=', this.start, 'end=', this.end);
        break;
      case 6:
        this.start = moment().subtract(2, 'year').startOf('year').format('YYYY-MM-DD');
        this.end = moment().subtract(2, 'year').endOf('year').format('YYYY-MM-DD');
        console.log('start=', this.start, 'end=', this.end);
        break;
    }
  }

  ngOnInit(): void {
    this.sentInvite.getInviteCount().subscribe(
      response => {
        this.inviteeCountList = response.data;
        console.log(response.data);
        this.list = [
          {
            timePeriod: 'Invite Candidates',
            count: ''
          },
          {
            timePeriod: 'Today (' + moment().format('DD MMM YYYY') + ')',
            count: this.inviteeCountList[0].countOfInvitees + ' Invited'
          },
          {
            timePeriod: 'Yesterday',
            count: this.inviteeCountList[1].countOfInvitees + ' Invited'
          },
          {
            timePeriod: 'Past One Month',
            count: this.inviteeCountList[2].countOfInvitees + ' Invited'
          },
          {
            timePeriod: moment().startOf('month').subtract(2, 'month').format('MMMM'),
            count: this.inviteeCountList[3].countOfInvitees + ' Invited'
          },
          {
            timePeriod: moment().startOf('year').subtract(1, 'year').format('YYYY'),
            count: this.inviteeCountList[4].countOfInvitees + ' Invited'
          }
          // {
          //   timePeriod: moment().startOf('year').subtract(2, 'year').format('YYYY'),
          //   count: this.inviteeCountList[5].countOfInvitees + ' Invited'
          // }
        ];
      }
    );

  }

  // getUsers(mode: number): any {
  //   switch (mode) {
  //     case 1: return this.invitedCandidates.slice(0, 3);
  //     case 2: return this.invitedCandidates.slice(2, 3);
  //     case 3: return this.invitedCandidates.slice(1);
  //     case 4: return this.invitedCandidates.slice(0, 4);
  //     case 5: return this.invitedCandidates.slice(3);
  //     case 5: return this.invitedCandidates.slice();
  //     default: return this.invitedCandidates.slice();
  //   }
  // }
}
