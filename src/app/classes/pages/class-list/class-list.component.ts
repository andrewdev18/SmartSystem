import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classes: any;

  constructor(private classService: ClassService) {
  }
  
  ngOnInit(): void {
    this.classService.getClasses().subscribe( res => {
      console.log(res);
    });
  }

}
