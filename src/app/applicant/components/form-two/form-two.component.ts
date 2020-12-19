import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  showErrors = true;
  applicantFormTwo: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get form(): any {
    return this.applicantFormTwo.controls;
  }

  onSubmit(): void {

  }
}
