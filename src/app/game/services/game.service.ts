import { Injectable } from '@angular/core';
import { GameTree, Question, QuestionType } from '../game.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as data from '../../../assets/questions_new';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  apiUrl: string = environment.apiUrl;
  questions: Question[] = data.questions;

  constructor(private http: HttpClient) {
    this.sortQuestions();
  }

  updateLevel(data: { studentId: number, level: number }) {
    return this.http.put(`${this.apiUrl}/class/updateLevel`, data);
  }

  private sortQuestions(): void {
    if (this.questions) {
      this.questions.sort((a, b) => {
        if (((0.2 * a.difficulty) + (a.topic!.difficulty - 0.2)) < ((0.2 * b.difficulty) + (b.topic!.difficulty - 0.2))) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }

  getFirst(desiredDiff: number) {
    let found: boolean = false;
    let idx: number = 0;
    let current = this.questions[0];
    let diff: number = Math.abs((desiredDiff - this.calculateDifficulty(current.difficulty, current.topic!.difficulty)) * 100);
    while (!found && idx < this.questions.length - 1) {
      let candidate: Question = this.questions[idx + 1];
      if (this.calculateDifficulty(candidate.difficulty, candidate.topic!.difficulty) < desiredDiff) {
        let newDiff: number = Math.abs((desiredDiff - this.calculateDifficulty(candidate.difficulty, candidate.topic!.difficulty)) * 100);
        if (newDiff < diff) {
          diff = newDiff;
          current = candidate;
        }
      } else {
        found = true;
      }
      idx++;
    }
    return current;
  }

  getEasier(desiredDiff: number) {
    let found: boolean = false;
    let idx: number = 0;
    let current = this.questions[0];
    let diff: number = Math.abs((desiredDiff - this.calculateDifficulty(current.difficulty, current.topic!.difficulty)) * 100);
    while (!found && idx < this.questions.length - 1) {
      let candidate: Question = this.questions[idx + 1];
      if (this.calculateDifficulty(candidate.difficulty, candidate.topic!.difficulty) <= desiredDiff) {
        let newDiff: number = Math.abs((desiredDiff - this.calculateDifficulty(candidate.difficulty, candidate.topic!.difficulty)) * 100);
        console.log(diff, newDiff);
        if (newDiff < diff) {
          diff = newDiff;
          current = candidate;
        }
      } else {
        found = true;
      }
      idx++;
    }
    return current;
  }

  getHarder(desiredDiff: number) {
    let found: boolean = false;
    let idx: number = this.questions.length - 2;
    let current = this.questions[idx + 1];
    let diff: number = Math.abs((desiredDiff - this.calculateDifficulty(current.difficulty, current.topic!.difficulty)) * 100);
    while (!found && idx >= 0) {
      let candidate: Question = this.questions[idx - 1];
      if (this.calculateDifficulty(candidate.difficulty, candidate.topic!.difficulty) >= desiredDiff) {
        let newDiff: number = Math.abs((desiredDiff - this.calculateDifficulty(candidate.difficulty, candidate.topic!.difficulty)) * 100);
        console.log(diff, newDiff);
        if (newDiff < diff) {
          diff = newDiff;
          current = candidate;
        }
      } else {
        found = true;
      }
      idx--;
    }
    return current;
  }

  calculateDifficulty(qstDif: number, topicDiff: number) {
    return (0.2 * qstDif) + (topicDiff - 0.2);
  }
}
