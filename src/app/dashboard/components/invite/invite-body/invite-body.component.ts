import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormValidator } from 'src/app/shared/services/form.validator';

@Component({
  selector: 'app-invite-body',
  templateUrl: './invite-body.component.html',
  styleUrls: ['./invite-body.component.scss']
})
export class InviteBodyComponent implements OnInit {

  inviteForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, FormValidator.isValidUsername()]),
      designation: new FormControl('', Validators.required),
      mobile_no: new FormControl('', [Validators.required, FormValidator.isValidMobileNumber()]),
      location: new FormControl('', Validators.required),
      jobDetail: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, FormValidator.isValidEmail()]),
    });

    this.inviteForm = formGroup;
  }

  get form(): any {
    return this.inviteForm.controls;
  }

  onSubmit(): void {
    if (this.inviteForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.inviteForm.value));
  }

}
