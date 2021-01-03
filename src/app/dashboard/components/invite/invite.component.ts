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
  start: string;
  end: string;
  selectedIndex = 0;

  invitedCandidates: sendInvite[];
  inviteeCountList = [];
  list = [];

  displayItem(index: number): void {
    this.selectedIndex = index;
    this.getDate(this.selectedIndex);
    this.sentInvite.getInvitedList(this.start, this.end).subscribe(
      response => {
        this.invitedCandidates = response.data;
      }
    );
  }


  ngOnInit(): void {
    this.sentInvite.getInviteCount().subscribe(
      response => {
        this.inviteeCountList = response.data;
        this.initList();
      }
    );
  }

  getDate(period: number): void {
    switch (period) {
      case 1:
        this.start = moment().format('YYYY-MM-DD');
        this.end = moment().format('YYYY-MM-DD');
        break;
      case 2:
        this.start = moment().subtract(1, 'day').startOf('day').format('YYYY-MM-DD');
        this.end = moment().subtract(1, 'day').endOf('day').format('YYYY-MM-DD');
        break;
      case 3:
        this.start = moment().subtract(1, 'month').startOf('day').format('YYYY-MM-DD');
        this.end = moment().subtract(1, 'month').endOf('day').format('YYYY-MM-DD');
        break;
      case 4:
        this.start = moment().subtract(2, 'month').startOf('month').format('YYYY-MM-DD');
        this.end = moment().subtract(2, 'month').endOf('month').format('YYYY-MM-DD');
        break;
      case 5:
        this.start = moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DD');
        this.end = moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DD');
        break;
      case 6:
        this.start = moment().subtract(2, 'year').startOf('year').format('YYYY-MM-DD');
        this.end = moment().subtract(2, 'year').endOf('year').format('YYYY-MM-DD');
        break;
    }
  }

  initList(): void {
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
    ];
  }
}
