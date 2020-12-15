import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isValidRobosoftEmail(email: string): boolean {
    const regEx = /^[a-zA-Z]+(\.[a-zA-Z]+)?@robosoftin.com$/;
    return regEx.test(email);
  }

}
