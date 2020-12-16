import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  keytab(event) {
    let nextInput = event.srcElement.nextElementSibling; // get the sibling element

    var target = event.target || event.srcElement;
    var id = target.id

    if (nextInput == null)  // check the maxLength from here
      return;
    else
      nextInput.focus();   // focus if not null
  }

}
