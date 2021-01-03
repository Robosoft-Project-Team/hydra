import { Component, Input, OnInit } from '@angular/core';
import { sendInvite } from 'src/app/core/models';
import { ResendInviteService } from 'src/app/dashboard/services/resend-invite.service';


@Component({
  selector: 'app-invite-sent-body',
  templateUrl: './invite-sent-body.component.html',
  styleUrls: ['./invite-sent-body.component.scss']
})
export class InviteSentBodyComponent implements OnInit {
  @Input() invitedCandidates: sendInvite[];
  isDataExists = false;
  invitees: any;

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
     error => {
       console.log(error.message);
     }
     
    );
  }
}
