import { Component } from '@angular/core';
import { Question } from '../../question.class';
import { GameService } from '../../services/game.service';
import { QChooseOption } from '../../game.interfaces';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.css']
})
export class ChooseOptionComponent {
  currentQuestion: Question;
  contentList: QChooseOption[];

  constructor(private gameService: GameService) {
    this.currentQuestion = new Question();
    this.currentQuestion = gameService.getNextQuestion();
    this.contentList = <QChooseOption[]>this.currentQuestion.content;
  }
}
