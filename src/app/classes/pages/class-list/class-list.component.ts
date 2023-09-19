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

  changeVisible: boolean = false;
  createVisible: boolean = false;
  classSearch: number = 0;
  searched: boolean = false;
  loading: boolean = false;

  targetClass?: Class;
  classFound?: boolean;

  newClass: Class;

  constructor(private classService: ClassService, private userService: UsersService, private router: Router) {
    let userTemp = this.userService.getUser();
    this.user = userTemp;
    this.newClass = { name: '', description: '', teacherId: 0 };
    if (this.user!.role == 'teacher') {
      this.user!.teacher = <Teacher>(userTemp!.teacher[0]);
      this.newClass.teacherId = this.user!.teacher!.id!;
    }
    this.getClasses();
  }

  ngOnInit(): void {
  }

  getClasses() {
    this.loading = true;
    if (this.user) {
      if (this.user.role == 'teacher') {
        this.classService.getTeacherClasses(this.user.teacher!.id!).subscribe(res => {
          this.classes = res;
          this.loading = false;
        });
      } else {
        this.classes = [];
        this.classService.getStudentClass(this.user.student!.classId!).subscribe(res => {
          this.classes.push(res);
          this.loading = false;
        });
      }
    }
  }

  navigateToClass(classId: number) {
    this.router.navigate(['classes', classId]);
  }

  switchChangeDialog() {
    this.changeVisible = !this.changeVisible;
  }

  switchCreateDialog() {
    this.createVisible = !this.createVisible;
  }

  createClass() {
    this.classService.addClass(this.newClass).subscribe();
    this.resetInputClasses();
    this.getClasses();
    this.createVisible = !this.createVisible;
  }

  resetInputClasses() {
    this.newClass = { name: '', description: '', teacherId: this.user!.teacher!.id! };
    this.targetClass = undefined;
  }

  searchClass() {
    if (this.classSearch >= 0) {
      this.classService.getClassById(this.classSearch).subscribe(res => {
        this.targetClass = <Class>res;
        if (this.targetClass) {
          this.classFound = true;
        } else {
          this.classFound = false;
        }
      });
    }
  }

  resetSearch() {
    this.classFound = false;
    this.searched = false;
    this.targetClass = undefined;
    this.classSearch = 0;
  }

  switchClass() {
    if (this.targetClass && this.user) {
      this.user.student!.classId! = this.targetClass.id!;
      this.classService.updateStudentClass(this.user!.id!, this.targetClass.id!).subscribe((res: any) => {
        let userTemp: User = JSON.parse(sessionStorage.getItem("user")!);
        userTemp.student!.classId = res.classId;
        sessionStorage.removeItem("user");
        sessionStorage.setItem("user", JSON.stringify(userTemp));
      });
      this.switchChangeDialog();
      this.getClasses();
    }
  }

  goToRegister() {
    this.router.navigate(['classes/register']);
  }
}
