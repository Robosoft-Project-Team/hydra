import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { SendInvite } from 'src/app/core/models';
import { ResendInviteService } from 'src/app/dashboard/services/resend-invite.service';


@Component({
  selector: 'app-invite-sent-body',
  templateUrl: './invite-sent-body.component.html',
  styleUrls: ['./invite-sent-body.component.scss']
})
export class InviteSentBodyComponent implements OnInit {
  @Input() invitedCandidates: SendInvite[];
  @Output() increaseCount = new EventEmitter<number>();
  @Output() selectedCandidateId = new EventEmitter<number>();
  @Input() id:number;
  isDataExists = false;
  invitees: any;
  date = moment().format('YYYY-MM-DD');

  constructor(private resendInvite: ResendInviteService) { }

  ngOnInit(): void {
    this.isDataExists = this.invitedCandidates?.length > 0 ? true : false;
  }

  resendInvites(id: number) {
    let inviteeName = this.invitedCandidates[id].name;
    let designation = this.invitedCandidates[id].designation;
    let location = this.invitedCandidates[id].location;
    let emailId = this.invitedCandidates[id].emailId;
    this.resendInvite.resendInvite(inviteeName, designation, location, emailId).subscribe(
      response => {
        if (response.status === 200) {
          this.increaseCount.emit(1);
          this.selectedCandidateId.emit(id);
        }
      },
      error => {
        console.log(error.message);
      }
    );
  }
}
