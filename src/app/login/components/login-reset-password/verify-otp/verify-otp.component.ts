import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangePasswordService } from 'src/app/login/services/change-password.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  otp: string;
  buttonDisabled: boolean;
  message: string;
  @ViewChild('f1') f1: ElementRef;
  @ViewChild('f2') f2: ElementRef;
  @ViewChild('f3') f3: ElementRef;
  @ViewChild('f4') f4: ElementRef;

  constructor(
    private passwordService: ChangePasswordService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.buttonDisabled = true;
    this.message = '';
  }

  ngOnInit(): void {
  }

  resetOtp(): void {
    this.f1.nativeElement.value = '';
    this.f2.nativeElement.value = '';
    this.f3.nativeElement.value = '';
    this.f4.nativeElement.value = '';
    this.otp = '';
  }

  setOtp(): void {
    this.otp = this.f1.nativeElement.value +
      this.f2.nativeElement.value +
      this.f3.nativeElement.value +
      this.f4.nativeElement.value;
    if (this.otp.length === 4) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  keytab(event, ref): void {
    if (event.keyCode === 8 && ref.value === '') {
      const prevInput = ref.previousElementSibling;
      if (prevInput === null) {
        return;
      }
      prevInput.focus();
    } else if (event.keyCode === 8) {
      ref.value = '';
      this.setOtp();
      return;
    }
  }

  changeFocus(event, ref): void {
    if (ref.value !== '') {
      ref.value = event % 10;
      const nextInput = ref.nextElementSibling;
      if (nextInput === null) {
        this.setOtp();
        return;
      }
      nextInput.focus();
    }
    this.setOtp();
  }

  resendOtp(): void {
    this.resetOtp();
    const response = this.passwordService.sendOtp();
    if (response) {
      this.message = response;
    }
  }

  onVerify(): void {
    this.passwordService.verifyOtp(this.otp)
      .subscribe(
        res => {
          if (res.status === 200) {
            this.router.navigate(['../change-password'], { relativeTo: this.route });
          } else if (res.status === 401) {
            this.message = res.message;
          }
        },
        err => this.message = err.statusText
      );
  }

}
