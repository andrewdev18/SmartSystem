import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { GameTree, Question, QuestionType, Topic } from '../../game.interfaces';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent {
  tree?: GameTree;
  topic?: Topic;
  question?: Question;

  constructor(private questionService: QuestionService) {
    this.tree = questionService.getTree();
    this.topic = this.tree?.topics[0];
    // console.log('New Question', questionService.getEasierQuestion(this.topic!, this.topic!.rootNode!, questionService.getTree()!)?.difficulty)
    this.question = this.topic?.rootNode!;
  }

  goToLesson() {
    console.log('Lessons module will be implemented soon');
  }

  getNextQuestion(isCorrect: boolean) {
    let nextContent: any;
    if (isCorrect) {
      console.log('Correct');
       nextContent = this.questionService.getHarderQuestion(this.topic!, this.question!, this.tree!);
       this.question = nextContent.question;
       this.topic = nextContent.topic;
      } else {
        console.log('Incorrect');
        nextContent = this.questionService.getEasierQuestion(this.topic!, this.question!, this.tree!);
        this.question = nextContent.question;
        this.topic = nextContent.topic;
    }
    console.log('Current difficulty', this.question?.difficulty);
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
