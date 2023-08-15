import { Component } from '@angular/core';
import { QSortSentece } from '../../game.interfaces';

@Component({
  selector: 'app-sentece-sort',
  templateUrl: './sentece-sort.component.html',
  styleUrls: ['./sentece-sort.component.css']
})
export class SenteceSortComponent {
  content: Answer[] = [
    { index: 0, word: { text: 'This', position: 0 } },
    { index: 1, word: { text: 'is', position: 1 } },
    { index: 2, word: { text: 'a', position: 2 } },
    { index: 3, word: { text: 'test', position: 3 } }
  ];

  draggedWord: Answer | undefined | null;

  answers: Answer[] = [];

  constructor() {
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
}

interface Answer {
  word?: QSortSentece;
  index: number;
}
