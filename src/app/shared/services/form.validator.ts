import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable()
export class FormValidator {
    constructor() { }

    static isValidUsername(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regEx = /([a-z]{1,}\s[a-z]{3,})|([a-z]{3,}\s[a-z]{1,})|([a-z]{3,})/;
            return regEx.test(control.value.trim()) ? null : { invalidUserName: true };
        };
    }

    static isValidEmail(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
            return regEx.test(control.value.trim()) ? null : { invalidEmail: true };
        };
    }

    static isCompanyEmail(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regEx = /^[a-zA-Z]+(\.[a-zA-Z]+)?@robosoftin\.com$/;
            return regEx.test(control.value.trim()) ? null : { invalidCompanyEmail: true };
        };
    }

    static isValidMobileNumber(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regEx = /^(\+?[0-9]{1,3}\s?)?[0-9]{3}[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}$/;
            return regEx.test(control.value.trim()) ? null : { invalidMobileNumber: true };
        };
    }

    static isValidPassword(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            // const regEx = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
            const regEx = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,16}$/;
            return regEx.test(control.value.trim()) ? null : { invalidPassword: true };
        };
    }

    static isPasswordMatching(password: string, confirmPassword: string): any {
        return (formGroup: FormGroup): { [key: string]: any } | null => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];

            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }

            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            } else {
                confirmPasswordControl.setErrors(null);
            }
        };
    }

    static isValidReference(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regEx = /([A-Za-z\s]+,\s?[A-Za-z\s]+,\s?[0-9]{10,},\s?[A-Za-z0-9]{3,}@[A-Za-z]{3,}\.[A-Za-z]{2,})$/;
            return regEx.test(control.value.trim()) ? null : { insufficientData: true };
        };
    }

    static isDOBValid(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regEx = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
            return regEx.test(control.value.trim()) ? null : { invalidDOB: true };
        };
    }
}
