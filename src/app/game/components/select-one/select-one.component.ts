import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QSelectOne, Question } from '../../game.interfaces';

@Component({
  selector: 'app-select-one',
  templateUrl: './select-one.component.html',
  styleUrls: ['./select-one.component.css']
})
export class SelectOneComponent implements OnInit {
  _question?: Question;
  content: QSelectOne[] = [];
  options: Option[] = [];
  selectedOption: Option = { text: '', index: -1 };
  answerIndex: number = 1;

  checked: boolean = false;

  @Output() onResolve: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() set question(qst: Question) {
    this._question = qst;
    this.content = <QSelectOne[]>(this._question!.content);
    this.options = [];
    this.content.forEach((element) => {
      if (element.isAnswer) {
        this.answerIndex = element.answerIndex!;
        element.options?.forEach((opt, optidx) => {
          this.options.push({ index: optidx, text: opt });
        });
      }
    });
    this.checked = false;
  }

  setAnswerIndex(index: number) {
    this.selectedOption.index = index;
  }

  checkAnswer() {
    if (this.selectedOption.index == this.answerIndex) {
      this.onResolve.emit(true);
    } else {
      this.onResolve.emit(false);
    }
    this.checked = true;
  }
}

interface Option {
  text: string;
  index: number;
}
