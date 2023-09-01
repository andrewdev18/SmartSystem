import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { UsersService } from './auth/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  isTeacher: boolean = false;

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.userService.getUser() != undefined ? true : false;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }

}
