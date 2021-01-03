import { Profile } from 'src/app/core/models/profile.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { User } from 'src/app/core/models';
import { StorageService } from 'src/app/shared/services/storage.service';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string = 'CV Analysis' || '';
  @Input() searchControl: boolean;
  @Input() dateControl: boolean;
  @Output() dateSelected = new EventEmitter<string>();
  @Output() searchItem = new EventEmitter<string>();
  @Output() searchValue = new EventEmitter<string>();

  filterDate = new FormControl(moment());
  search = new FormControl();
  user: User = {
    name: '',
    designation: '',
    image: {
      url: ''
    }
  };

  constructor(
    private dashboardService: DashboardService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.user.name = this.storageService.getUserProfile()?.employeeName || 'User';
    this.user.designation = this.storageService.getUserProfile()?.employeeRole || 'Employee';
    this.user.image.url = this.dashboardService.dashboardData.user.image.url;
  }

  selectedDate(date: MatDatepickerInputEvent<moment.Moment>): void {
    this.dateSelected.emit(date.value.format('YYYY-MM-DD'));
  }

  handleInput(): void {
    this.searchItem.emit(this.search.value);
  }

  handleFocusOut(): void {
    this.searchValue.emit(this.search.value);
  }

}
