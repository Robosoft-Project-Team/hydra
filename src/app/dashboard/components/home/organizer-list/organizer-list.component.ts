import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizer-list',
  templateUrl: './organizer-list.component.html',
  styleUrls: ['./organizer-list.component.scss']
})
export class OrganizerListComponent implements OnInit {
  @Input() organizers: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
