import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStorageService {

  constructor() { }

  storeForm(name: string, data: any): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  hasForm(name: string): boolean {
    return Boolean(localStorage.getItem(name));
  }

  getForm(name: string): any {
    return JSON.parse(localStorage.getItem(name));
  }

  resetForms(): void {
    localStorage.removeItem('formOne');
    localStorage.removeItem('formTwo');
    localStorage.removeItem('formThree');
  }

}
