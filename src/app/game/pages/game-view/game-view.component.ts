import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { GameTree, Question, QuestionType, Topic } from '../../game.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent {
  tree?: GameTree;
  topic?: Topic;
  question?: Question;
  isCorrect?: boolean;

  constructor(private questionService: QuestionService, private router: Router) {
    this.tree = questionService.getTree();
    this.topic = this.tree?.topics[0];
    this.question = this.topic?.rootNode!;
  }

  goToLesson() {
    this.router.navigate(['lessons/', this.topic?.title.replace(' ', '_')]);
  }
  
  validateQuestion(correct: boolean) {
    this.isCorrect = correct;
  }

  getNextQuestion() {
    let nextContent: any;
    if(this.isCorrect != undefined){
      if (this.isCorrect) {
        nextContent = this.questionService.getHarderQuestion(this.topic!, this.question!, this.tree!);
        this.question = nextContent.question;
        this.topic = nextContent.topic;
      } else {
        nextContent = this.questionService.getEasierQuestion(this.topic!, this.question!, this.tree!);
        this.question = nextContent.question;
        this.topic = nextContent.topic;
      }
    }
    this.isCorrect = undefined;
  }

  getDifficulty(): string {
    if (this.topic) {
      if (this.topic.difficulty <= 0.25) {
        return 'Begginer';
      } else if (this.topic.difficulty <= 0.5) {
        return 'Starter';
      } else if (this.topic.difficulty <= 0.75) {
        return 'Intermediate';
      } else {
        return 'Advanced';
      }
    }
    return 'Undefined';
  }

  getSeverity(): string {
    switch (this.getDifficulty()) {
      case 'Begginer':
        return 'success';
      case 'Starter':
        return 'primary';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
