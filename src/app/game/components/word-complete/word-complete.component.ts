import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QWordComplete, Question } from '../../game.interfaces';

@Component({
  selector: 'app-word-complete',
  templateUrl: './word-complete.component.html',
  styleUrls: ['./word-complete.component.css']
})
export class WordCompleteComponent implements OnInit {
  _question?: Question;
  content: QWordComplete[] = [];

  @Output() onResolve: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() set question(qst: Question) {
    this._question = qst;
    this.content = <QWordComplete[]>(this._question.content);
  }

  checkAnswer() {
    let isCorrect: boolean = true;
    this.content.forEach(phrase => {
      let allowedAnswer: boolean = false;
      if (phrase.isAnswer) {
        phrase.answers?.forEach(answer => {
          if (answer == phrase.text.trim()) {
            allowedAnswer = true;
          }
        });
        if (allowedAnswer == false) {
          isCorrect = false;
        }
      }
    });

    if (isCorrect) {
      this.onResolve.emit(true);
    } else {
      this.onResolve.emit(false);
    }
  }
}
