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
  messageSuccess: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    reEnterPassword: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
  }

  checkpassword() {
    if (!this.changepassword.value.newPassword || !this.changepassword.value.reEnterPassword) {
      this.message = "Password is required";
      this.messageSuccess = "";
    }
    else if (this.changepassword.value.newPassword == this.changepassword.value.reEnterPassword) {
      this.message = "";
      // this.messageSuccess = "Password successfully changed";
      this.router.navigate(['../reset-success'], { relativeTo: this.route });
    }
    else {
      this.message = "Passwords do not match";
      this.messageSuccess = "";
    }
  }

}
