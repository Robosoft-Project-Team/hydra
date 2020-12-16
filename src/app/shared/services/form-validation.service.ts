import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isValidRobosoftEmail(email: string): boolean {
    const regEx = /^[a-zA-Z]+(\.[a-zA-Z]+)?@robosoftin\.com$/;
    return regEx.test(email.trim());
  }

  isValidEmail(email: string): boolean {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return regEx.test(email.trim());
  }

  isValidUsername(username: string): boolean {
    const regEx = /([a-z]{1,}\s[a-z]{3,})|([a-z]{3,}\s[a-z]{1,})|([a-z]{3,})/;
    return regEx.test(username.trim());
  }

  isValidMobileNumber(mobileNo: string): boolean {
    const regEx = /^(\+?[0-9]{1,3}\s?)?[0-9]{3}[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}$/;
    return regEx.test(mobileNo.trim());
  }

}
