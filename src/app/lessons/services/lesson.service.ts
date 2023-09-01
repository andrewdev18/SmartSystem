import { Injectable } from '@angular/core';
import * as data from '../../../assets/questions';
import { Topic } from 'src/app/game/game.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getTopics(): Topic[] {
    let topics: Topic[] = data.topics;
    this.sortTopics(topics);
    return topics;
  }

  private sortTopics(topics: Topic[]): void {
    if (topics) {
      topics.sort((a, b) => {
        if (a.difficulty < b.difficulty) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }

  findTopic(name: string): Topic | undefined {
    let targetTopic: Topic | undefined;
    let targetName: string = name.replace('_', ' ');


    this.getTopics().forEach(topic => {
      if (topic.title == targetName) {
        targetTopic = { ...topic };
      }
    });

    return targetTopic;
  }
}
