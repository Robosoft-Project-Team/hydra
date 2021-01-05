import { Component, OnInit } from '@angular/core';
import { SendInvite } from 'src/app/core/models';
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

  invitedCandidates: SendInvite[];
  inviteeCountList = [];
  list = [];

  displayItem(index: number): void {
    this.selectedIndex = index;
    this.getDate(this.selectedIndex);
    this.onFilterData('');
  }


  ngOnInit(): void {
    this.sentInvite.getInviteCount().subscribe(
      response => {
        this.inviteeCountList = response.data;
        this.initList();
      }
    );
  }

  getDate(id: number): void {
    this.start = moment(this.inviteeCountList[id - 1].startDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    this.end = moment(this.inviteeCountList[id - 1].endDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
  }

  initList(): void {
    this.list = [
      {
        timePeriod: 'Invite Candidates',
        count: ''
      },
      {
        timePeriod: 'Today (' + moment().startOf('day').format('DD MMM YYYY') + ')',
        count: this.inviteeCountList[0].countOfInvitees + ' Invited'
      },
      {
        timePeriod: 'Yesterday',
        count: this.inviteeCountList[1].countOfInvitees + ' Invited'
      },
      {
        timePeriod: 'This Month',
        count: this.inviteeCountList[2].countOfInvitees + ' Invited'
      },
      {
        timePeriod: 'Past One Month',
        count: this.inviteeCountList[3].countOfInvitees + ' Invited'
      },
      {
        timePeriod: 'Past One Year',
        count: this.inviteeCountList[4].countOfInvitees + ' Invited'
      },
      {
        timePeriod: moment(this.inviteeCountList[5].startDate, 'YYYY-MM-DD').format('YYYY'),
        count: this.inviteeCountList[5].countOfInvitees + ' Invited'
      }
    ];
  }

  onSearchItem(data: string): void {
    this.onFilterData(data);
  }

  onFilterData(search: string): void {
    this.sentInvite.getInvitedList(this.start, this.end).subscribe(
      response => {
        if (response.data) {
          this.invitedCandidates = response.data.filter(item => {
            return item.name.toLowerCase().includes(search?.toLowerCase());
          });
        }
        else {
          this.invitedCandidates = [];
        }
      }
    );
  }

  increaseCount(data): void {
    this.inviteeCountList[0].countOfInvitees += data;
    this.inviteeCountList[2].countOfInvitees += data;
    // this.inviteeCountList[3].countOfInvitees += data;
    this.initList();
  }
}
