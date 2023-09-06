import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { UsersService } from 'src/app/auth/users.service';
import { Teacher, User } from 'src/app/auth/user.interface';
import { Class } from '../../classes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  user?: User;
  classes: Class[] = [];

  dialogVisible: boolean = false;
  classSearch: string = '';

  targetClass?: Class;
  classFound?: boolean;

  constructor(private classService: ClassService, private userService: UsersService, private router: Router) {
    let userTemp = this.userService.getUser();
    this.user = userTemp;
    if (this.user) {
      if (this.user.role == 'teacher') {
        console.log(this.user);
        this.user.teacher = <Teacher>(userTemp!.teacher[0]);
        this.classService.getTeacherClasses(this.user.teacher!.id!).subscribe(res => {
          this.classes = res;
        });
      } else {
        this.classService.getStudentClass(this.user.student!.classId!).subscribe(res => {
          this.classes.push(res);
        });
      }
    }
    console.log(this.classes);
  }

  ngOnInit(): void {
  }

  navigateToClass(classId: number) {
    this.router.navigate(['classes', classId]);
  }

  switchDialog() {
    this.dialogVisible = !this.dialogVisible;
  }

  searchClass() {
    if (this.classSearch) {
      this.classService.getClassById(Number.parseInt(this.classSearch)).subscribe(res => {
        this.targetClass = res;
      });
    }
    if (this.targetClass) {
      this.classFound = true;
    } else {
      this.classFound = false;
    }
  }

  switchClass() {
    if (this.targetClass && this.user) {
      this.user.student!.classId! = this.targetClass.id!;
      this.classService.updateStudentClass(this.user!)
      this.switchDialog();
    }
  }

  goToRegister() {
    this.router.navigate(['classes/register']);
  }
}
