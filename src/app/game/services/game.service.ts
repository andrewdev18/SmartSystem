import { Injectable } from '@angular/core';
import { Question } from '../question.class';
import { QuestionType } from '../game.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getNextQuestion(): Question {
    let question: Question = new Question();
    question.instruction = "Choose the correct option. This is a past sentence.";
    question.type = QuestionType.ChooseOption;
    question.content = [{ text: 'The cat', isAnswer: false }, { text: '', isAnswer: true, correctOpt: 'fell', wrongOpt: 'falls' }, { text: 'in the water.', isAnswer: false }]
    return question;
  }
}
