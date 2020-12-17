import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  message: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    reEnterPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  });


  ngOnInit(): void {
  }

  submitPassword(): void {
    console.log(this.changepassword.get('newPassword').value);
  }

}
