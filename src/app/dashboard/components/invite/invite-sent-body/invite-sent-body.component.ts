import { Component, Input, OnInit } from '@angular/core';
import { sendInvite } from 'src/app/core/models';


@Component({
  selector: 'app-invite-sent-body',
  templateUrl: './invite-sent-body.component.html',
  styleUrls: ['./invite-sent-body.component.scss']
})
export class InviteSentBodyComponent implements OnInit {
  @Input() invitedCandidates: sendInvite[];
  isDataExists = false;

  ngOnInit(): void {
    this.isDataExists = this.invitedCandidates?.length > 0 ? true : false;
  }

}
