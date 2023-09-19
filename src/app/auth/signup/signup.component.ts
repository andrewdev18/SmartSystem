import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = '';
  age?: number;
  username: string = '';
  password: string = '';
  loading: boolean = false;

  @Input() isTeacher: boolean = false;
  created: boolean;

  constructor(private userService: UsersService, private router: Router) {
    this.created = false;
  }

  ngOnInit(): void {
  }

  register() {
    this.loading = true;
    let user: User;
    if(this.isTeacher) {
      user = { name: this.name, role: 'teacher', username: this.username, password: this.password }
    } else {
      user = { name: this.name, role: 'student', username: this.username, password: this.password }
    }
    if (this.name.length > 0 && this.username.length > 0 && this.password.length > 0) {
      this.userService.register(user).subscribe((res: any) => {
        console.log(res);
        if(res.id) {
          this.created = true;
        }
        if(this.created) {
          this.router.navigate(['login']);
        }
        this.loading = false;
      });
    } else {
      alert('Wrong data!');
      this.loading = false;
    }
  }
}
