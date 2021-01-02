import { Component, Input, OnInit } from '@angular/core';
import { Organizer } from 'src/app/core/models';

@Component({
  selector: 'app-organizer-list',
  templateUrl: './organizer-list.component.html',
  styleUrls: ['./organizer-list.component.scss']
})
export class OrganizerListComponent implements OnInit {
  @Input() organizers: Organizer[];
  constructor() { }

  ngOnInit(): void {
  }

}
