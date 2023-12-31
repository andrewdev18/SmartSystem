import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/game.service';
import { QChooseOption, Question } from '../../game.interfaces';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.css']
})
export class ChooseOptionComponent implements OnInit {
  _question?: Question;
  contentList?: QChooseOption[];
  options: Options[] = [];

  checked: boolean = false;

  @Output() onResolve: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  constructor() {
  }

  @Input() set question(qst: Question) {
    this._question = qst;
    this.contentList = <QChooseOption[]>(this._question.content);
    this.setOptions();
    this.checked = false;
  }

  setOptions() {
    this.options = [];
    this.contentList?.forEach(element => {
      if (element.isAnswer) {
        let rnd = Math.random();
        if (rnd < 0.5) {
          this.options.push({ text: element.correctOpt!, isCorrect: true });
          this.options.push({ text: element.wrongOpt!, isCorrect: false });
        } else {
          this.options.push({ text: element.wrongOpt!, isCorrect: false });
          this.options.push({ text: element.correctOpt!, isCorrect: true });
        }
      }
    });
  }

  checkAnswer(index: number) {
    if (!this.checked) {
      if (this.options[index].isCorrect) {
        this.onResolve.emit(true);
      } else {
        this.onResolve.emit(false);
      }
      this.checked = true;
    }
  }
  
  getStyleClass(index: number) {
    if(this.checked) {
      if (this.options[index].isCorrect) {
        return 'border-3 border-green-500';
      } else {
        return 'border-3 border-red-500';
      }
    }
    return '';
  }
}

interface Options {
  text: string;
  isCorrect: boolean;
}
