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

  setUserProfile(employeeName: string, role: number): void {
    const userProfile = {
      employeeName,
      employeeRole: role === 1 ? 'Recruiter' : 'Employee'
    };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }

  getUserProfile(): any {
    return JSON.parse(localStorage.getItem('userProfile'));
  }
}
