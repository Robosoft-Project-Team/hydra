import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { DropdowHandlerService } from './dropdown.service';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input() data: any[];
  @Output() selectedItem = new EventEmitter<any>();
  selectedChoice: any;
  constructor(
    private el: ElementRef,
    private dropdown: DropdowHandlerService
  ) { }

  ngOnInit(): void {
    this.selectedChoice = this.data[0];
    this.dropdown.dropdownHandler(this.el);
  }

  onItemSelect(index: number): void {
    this.selectedChoice = this.data[index];
    this.selectedItem.emit(this.selectedChoice);
  }
}
