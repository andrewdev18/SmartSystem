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
  username: string = '';
  pass: string = '';

  constructor(private userService: UsersService, private router: Router) { }

  login() {
    if (this.userService.login(this.username, this.pass)) {
      this.router.navigate(['home']);
    } else {
      alert('Invalid credentials');
    }
  }

  loginStudent() {
    let user: User = { id: 2, username: 'student1', name: 'Student 1', role: 'student', class: 1 };
    this.userService.loginTemp(user);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }

  loginTeacher() {
    let user: User = { id: 1, username: 'teacher1', name: 'Teacher 1', role: 'teacher' };
    this.userService.loginTemp(user);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
}
