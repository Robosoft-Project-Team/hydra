import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  keytab(event): void {
    const nextInput = event.srcElement.nextElementSibling; // get the sibling element

    const target = event.target || event.srcElement;
    const id = target.id;

    if (nextInput == null) {  // check the maxLength from here
      return;
    }
    else {
      nextInput.focus();
    }   // focus if not null
  }

  onVerify(): void {
    this.router.navigate(['../change-password'], { relativeTo: this.route });
  }

}
