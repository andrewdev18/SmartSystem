import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { GameTree, Question, QuestionType, Topic } from '../../game.interfaces';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user.interface';
import { UsersService } from 'src/app/auth/users.service';
import { GameService } from '../../services/game.service';

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
  user!: User;

  attemps: number = 5;

  constructor(private questionService: QuestionService, private userService: UsersService, private gameService: GameService, private router: Router) {
    this.user = userService.getUser();
    let initialContent: any = this.gameService.getFirst(this.user.student?.level! / 100);
    this.question = { ...initialContent };
    this.topic = { ...initialContent.topic };
    
    // let initialContent: any = questionService.getInitialQuestion(this.user.student?.level!);
    // this.topic = { ...initialContent.topic };
    // this.question = { ...initialContent.question };
  }

  goToLesson() {
    this.router.navigate(['lessons/', this.topic?.title.replace(' ', '_')]);
  }

  validateQuestion(correct: boolean) {
    this.isCorrect = correct;
    let questionLevel: number = (this.question!.difficulty / 100) + this.topic!.difficulty!;
    let newStudentLevel: number = this.user.student!.level;
    const increment: number = 25;
    if (this.isCorrect) {
      newStudentLevel = Math.round((newStudentLevel + (newStudentLevel + (questionLevel * increment))) / 2)
      if (newStudentLevel > 99) {
        newStudentLevel = 99;
      }
    } else {
      newStudentLevel = Math.round((newStudentLevel + (newStudentLevel - (questionLevel * increment * 0.5))) / 2)
      if (newStudentLevel < 1) {
        newStudentLevel = 1;
      }
    }
    this.gameService.updateLevel({ studentId: this.user.student!.id!, level: newStudentLevel }).subscribe();
    this.user.student!.level = newStudentLevel;
    sessionStorage.removeItem("user");
    sessionStorage.setItem("user", JSON.stringify(this.user));
    this.userService.getUser();
  }

  getNextQuestion() {
    if (this.attemps > 0) {
      let nextContent: any;
      if (this.isCorrect != undefined) {
        let currentDiff: number = this.gameService.calculateDifficulty(this.question!.difficulty, this.topic!.difficulty);
        console.log('desired', currentDiff);
        if (this.isCorrect) {
          nextContent = this.gameService.getHarder(currentDiff + 0.05);
          this.question = { ...nextContent };
          this.topic = { ...nextContent.topic };
          
          // nextContent = this.questionService.getHarderQuestion(this.topic!, this.question!);
          // this.question = { ...nextContent.question };
          // this.topic = { ...nextContent.topic };
        } else {
          nextContent = this.gameService.getEasier(currentDiff - 0.05);
          this.question = { ...nextContent };
          this.topic = { ...nextContent.topic };
          // nextContent = this.questionService.getEasierQuestion(this.topic!, this.question!);
          // this.question = { ...nextContent.question };
          // this.topic = { ...nextContent.topic };
        }
      }
      this.attemps--;
    }
    this.isCorrect = undefined;
  }

  getDifficulty(lvl: number): string {
    if (this.topic) {
      if (lvl <= 0.25) {
        return 'Begginer';
      } else if (lvl <= 0.5) {
        return 'Starter';
      } else if (lvl <= 0.75) {
        return 'Intermediate';
      } else {
        return 'Advanced';
      }
    }
    return 'Undefined';
  }

  getSeverity(diff: string): string {
    switch (diff) {
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
