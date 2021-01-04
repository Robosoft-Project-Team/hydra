import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/login/services/sign-in.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isDashboard = true;
  constructor(
    public router: Router,
    private signInService: SignInService
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.signInService.logout();
    this.router.navigate(['/']);
  }
}
