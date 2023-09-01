import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/game/game.interfaces';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-lesson-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})
export class LessonViewComponent {
  topic?: Topic;

  constructor(private route: ActivatedRoute, private lessonService: LessonService) {
    let name: string = '';
    route.paramMap.subscribe(data => {
      name = data.get('topic')!;
    })
    this.getTopic(name);
  }

  getTopic(name: string) {
    console.log(name);
    this.topic = this.lessonService.findTopic(name);
  }

}
