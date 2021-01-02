import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  @Input() applicant;

  constructor() { }

  ngOnInit(): void {
  }

  getProfileImage(): any {
    const attachment = this.applicant.attachmentEntities.filter(item => item.type === 'Profile')[0];
    if (attachment) {
      return attachment.download_link.split('0/')[1];
    }
  }

  convertCTC(ctc: string): string {
    const CTC = +ctc.split('.')[0];
    return CTC < 99999 ? Math.floor(CTC / 1000) + 'K' : (CTC < 9999999) ? Math.floor(CTC / 100000) + 'L' : (CTC / 10000000).toFixed(2) + 'Cr';
  }
}
