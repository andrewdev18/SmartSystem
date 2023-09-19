import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student, User } from 'src/app/auth/user.interface';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {
  students: User[] = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private classService: ClassService) {
    let currentClass: string = '';
    route.paramMap.subscribe(data => {
      currentClass = data.get('class')!;
    })
    this.getStudents(Number.parseInt(currentClass));
  }

  ngOnInit(): void {
  }

  getStudents(classId: number) {
    this.loading = true;
    let tempStudents: any;
    this.classService.getClassById(classId).subscribe((res: any) => {
      // tempStudents = res;
      // console.log(res);
      res.students.forEach((stud: any, index: number) => {
        let tempUsr: User = stud.user;
        tempUsr.student = { userId: stud.user.id, level: stud.level }
        this.students.push(tempUsr);
      });
      this.loading = false;
    });
    console.log(this.students);
  }

  getDifficulty(level: number) {
    if (level <= 25) {
      return 'Begginer';
    } else if (level <= 50) {
      return 'Starter';
    } else if (level <= 75) {
      return 'Intermediate';
    } else {
      return 'Advanced';
    }
  }

  getSeverity(level: number): string {
    switch (this.getDifficulty(level)) {
      case 'Begginer':
        return 'success';
      case 'Starter':
        return 'info';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
