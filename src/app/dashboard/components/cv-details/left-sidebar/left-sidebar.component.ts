import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  @Input() applicant;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getProfileImage(): any {
    const link = this.applicant.attachmentEntities.filter(item => item.type === 'Profile')[0].download_link;
    const result = this.http.get(link);
    console.log(result);
  }

}
