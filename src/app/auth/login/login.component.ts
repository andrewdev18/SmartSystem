import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UsersService, private router: Router) { }

  loginStudent() {
    let user: User = { username: 'student1', name: 'Student 1', role: 'student' };
    this.userService.login(user);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
  
  loginTeacher() {
    let user: User = { username: 'teacher1', name: 'Teacher 1', role: 'teacher' };
    this.userService.login(user);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
}
