import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QSortSentece, Question } from '../../game.interfaces';

@Component({
  selector: 'app-sentece-sort',
  templateUrl: './sentece-sort.component.html',
  styleUrls: ['./sentece-sort.component.css']
})
export class SenteceSortComponent implements OnInit {
  _question?: Question;
  content: Answer[] = [];
  answers: Answer[] = [];

  draggedWord: Answer | undefined | null;
  checked: boolean = false;

  @Output() onResolve: EventEmitter<any> = new EventEmitter();
  @Output() questionChange = new EventEmitter<Question | undefined>();

  constructor(private changesDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  @Input() set question(qst: Question) {
    this._question = { ...qst };
    this.content = [];
    this.answers = [];
    let index: number = 0;
    let rnd: number = 0;
    if (this._question.content) {
      while (this._question.content!.length > 0) {
        rnd = Math.round((this._question.content!.length - 1) * Math.random());
        this.content.push({ index: index, word: <QSortSentece>this._question.content![rnd] });
        this._question.content!.splice(rnd, 1);
        index++;
      }
    }
    this.setAnswerBoxes();
    this.checked = false;
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
      let aux: Answer | undefined = undefined;
      if (this.answers[position].word?.text) {
        console.log('target', this.answers[position]);
        aux = { word: { ...this.answers[position].word! }, index: this.content.length - 1 };
      }
      this.answers[position].word = { ...this.draggedWord.word! };
      this.content.splice(this.draggedWord.index, 1);
      if (aux) {
        this.content.forEach(element => {
          if (element.index >= aux!.index) {
            element.index--;
          }
        });
        this.content.push(aux);
        console.log('Answers', this.answers);
        console.log('Content', this.content);
      }
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
    this.checked = true;
  }
}

interface Answer {
  word?: QSortSentece;
  index: number;
}
