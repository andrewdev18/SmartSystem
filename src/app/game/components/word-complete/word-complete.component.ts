import { Component } from '@angular/core';
import { QWordComplete } from '../../game.interfaces';

@Component({
  selector: 'app-word-complete',
  templateUrl: './word-complete.component.html',
  styleUrls: ['./word-complete.component.css']
})
export class WordCompleteComponent {
  content: QWordComplete[] = [];

  constructor() {
    this.content = [
      { text: '', isAnswer: true, answers: ['What'] },
      { text: 'would you', isAnswer: false },
      { text: '', isAnswer: true, answers: ['like'] },
      { text: 'to drink?', isAnswer: false }
    ];
  }
}
