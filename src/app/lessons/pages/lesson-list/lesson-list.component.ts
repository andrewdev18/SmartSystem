import { Component } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Topic } from 'src/app/game/game.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class MainComponent {
  topics: Topic[] = [];
  
  constructor(private lessonService: LessonService, private router: Router) {
    this.topics = lessonService.getTopics();
  }

  getDifficulty(topic: Topic): string {
    if (topic) {
      if (topic.difficulty <= 0.25) {
        return 'Begginer';
      } else if (topic.difficulty <= 0.5) {
        return 'Starter';
      } else if (topic.difficulty <= 0.75) {
        return 'Intermediate';
      } else {
        return 'Advanced';
      }
    }
    return 'Undefined';
  }

  getSeverity(topic: Topic): string {
    switch (this.getDifficulty(topic)) {
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

  goToLesson(topic: Topic) {
    this.router.navigate(['lessons', topic.title.replace(' ', '_')])
  }
}
