import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setJwtToken(token: any): void {
    localStorage.setItem('jwtToken', token);
  }

  getJwtToken(): any {
    return localStorage.getItem('jwtToken');
  }

  hasJwtToken(): boolean {
    return Boolean(localStorage.getItem('jwtToken'));
  }

  removeJwtToken(): void {
    localStorage.removeItem('jwtToken');
  }
}
