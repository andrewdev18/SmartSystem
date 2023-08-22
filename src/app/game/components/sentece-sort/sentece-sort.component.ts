import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QSortSentece, Question } from '../../game.interfaces';

@Component({
  selector: 'app-sentece-sort',
  templateUrl: './sentece-sort.component.html',
  styleUrls: ['./sentece-sort.component.css']
})
export class SenteceSortComponent implements OnInit {
  content: Answer[] = [];
  answers: Answer[] = [];

  draggedWord: Answer | undefined | null;

  @Output() onResolve: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() set question(qst: Question) {
    let questions: QSortSentece[] = <QSortSentece[]>(qst.content!);
    this.content = [];
    let index: number = 0;
    let rnd: number = 0;
    while (questions.length > 0) {
      rnd = Math.round((questions.length - 1) * Math.random());
      this.content.push({ index: index, word: questions[rnd] });
      questions.splice(rnd, 1);
      index++;
    }
    this.setAnswerBoxes();
  }

  setAnswerBoxes() {
    this.content.forEach((element, index) => {
      this.answers.push({ word: undefined, index: index });
    });
  }

  dragStart(answer: Answer) {
    this.draggedWord = answer;
  }

  drop(position: number) {
    if (this.draggedWord) {
      this.answers[position].word = this.draggedWord.word;
      this.content[this.draggedWord.index].word = undefined;
    }
  }

  dragEnd() {
    this.draggedWord = null;
  }

  checkAnswer() {
    let isCorrect: boolean = true;
    this.answers.forEach(element => {
      if (element.index != element.word!.position) {
        isCorrect = false;
      }
    });
    if (isCorrect) {
      this.onResolve.emit(true);
    } else {
      this.onResolve.emit(false);
    }
  }
}

interface Answer {
  word?: QSortSentece;
  index: number;
}
