import { Component } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../classes.interface';
import { UsersService } from 'src/app/auth/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-register',
  templateUrl: './class-register.component.html',
  styleUrls: ['./class-register.component.css']
})
export class ClassRegisterComponent {
  class: Class = { name: '', teacherId: 0 };

  constructor(private classService: ClassService, private userService: UsersService, private router: Router) {
    this.class.teacherId = this.userService.getUser()!.id!;
  }

  register() {
    if (this.class.name.trim() != '') {
      this.classService.addClass(this.class).subscribe(res => {
        console.log(res);
      });
    }
    this.router.navigate(['classes']);
  }

}
