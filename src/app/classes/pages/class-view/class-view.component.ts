import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/auth/user.interface';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {
  students: User[] = [];
  
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
    this.classService.getStudents(classId).subscribe(res => {
      this.students = res;
    });
    console.log(this.students);
  }
}
