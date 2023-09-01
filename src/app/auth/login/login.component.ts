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
  user: User[] = [];

  constructor(private userService: UsersService, private router: Router) { }

  login() {
    this.userService.loginUser(this.username, this.pass).subscribe(res => {
      console.log(res);
      this.user = <User[]>res;
      if(this.user.length > 0)
      {
        sessionStorage.setItem("user", JSON.stringify(this.user[0]));
        this.router.navigate(['home']).then(() => {
          window.location.reload();
        });
      } else {
        alert('Invalid credentials');
      }
    });
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
