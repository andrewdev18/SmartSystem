import { Component } from '@angular/core';
import { QSelectOne } from '../../game.interfaces';

@Component({
  selector: 'app-select-one',
  templateUrl: './select-one.component.html',
  styleUrls: ['./select-one.component.css']
})
export class SelectOneComponent {
  content: QSelectOne[] = [];
  options: Option[] = [{ text: 'could', index: 0 }, { text: 'can', index: 1 }, { text: 'must', index: 2 }];
  selectedOption: Option = { text: '', index: -1 };
  answerIndex: number = 1;

  constructor() {
    this.content = [
      { text: 'You', isAnswer: false },
      { text: '', isAnswer: true, answerIndex: 1 },
      { text: 'go if you want.', isAnswer: false }
    ];
  }
}

interface Option {
  text: string;
  index: number;
}
