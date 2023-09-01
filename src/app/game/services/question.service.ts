import { Injectable } from '@angular/core';
import * as data from '../../../assets/questions';
import { GameTree, Question, QuestionType, Topic } from '../game.interfaces';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  tree: GameTree = { topics: [] };
  questions: Question[][] = data.questions;

  constructor() {
    this.getTopics();
    this.sortTopics();
    this.setRootNodes();
  }

  public getTree(): GameTree | undefined {
    return this.tree;
  }

  private getTopics(): void {
    this.tree.topics = data.topics;
  }

  private setRootNodes(): void {
    this.tree.topics.forEach((topic, index) => {
      let middleQuestion: Question = { instruction: '', difficulty: 0, type: QuestionType.None };
      let idx: number = -1;
      this.questions[index].forEach((question: Question, index: number) => {
        if (Math.abs(question.difficulty - 0.5) <= Math.abs(middleQuestion.difficulty - 0.5)) {
          middleQuestion = { ...question };
          idx = index;
        }
      });
      if (idx >= 0) {
        this.questions[index].splice(idx, 1);
      }
      topic.rootNode = middleQuestion;
      this.buildNextNode(topic.rootNode, this.questions[index]);
    });
  }

  private sortTopics(): void {
    if (this.tree) {
      this.tree.topics.sort((a, b) => {
        if (a.difficulty < b.difficulty) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }

  private buildNextNode(node: Question | undefined, nodes: Question[]): void {
    if (!node) {
      return;
    }
    this.setNextNode(true, node, nodes);
    this.setNextNode(false, node, nodes);
    this.buildNextNode(node.easierQuestion, nodes);
    this.buildNextNode(node.harderQuestion, nodes);
  }

  private setNextNode(isEasier: boolean, currentNode: Question, nodes: Question[]): void {
    let difficulty: number = 0;
    if (isEasier) {
      difficulty = currentNode.difficulty / 2;
    } else {
      difficulty = currentNode.difficulty + ((1 - currentNode.difficulty) / 2);
    }
    if (difficulty < 0) {
      difficulty = 0;
    }
    if (difficulty > 1) {
      difficulty = 1;
    }

    let nextQuestion: Question | undefined;

    let idx: number = -1;
    nodes.forEach((node, index) => {
      let canBeAssigned: boolean = (isEasier && node.difficulty <= 0.5 && currentNode.difficulty <= 0.5) ||
        (!isEasier && node.difficulty >= 0.5 && currentNode.difficulty >= 0.5);
      if (canBeAssigned && ((isEasier && node.difficulty <= currentNode.difficulty) || (!isEasier && node.difficulty >= currentNode.difficulty))) {
        if (Math.abs(node.difficulty - difficulty) <= Math.abs(currentNode.difficulty - difficulty)) {
          nextQuestion = { ...node };
          idx = index;
        }

      }
    });
    if (nextQuestion) {
      nodes.splice(idx, 1);
      if (isEasier) {
        currentNode.easierQuestion = nextQuestion;
      } else {
        currentNode.harderQuestion = nextQuestion;
      }
    }
  }

  public getEasierQuestion(currentTopic: Topic, currentQuestion: Question, tree: GameTree): { question: Question, topic: Topic } | undefined {
    let newQuestion: Question | undefined;
    let newTopic: Topic = currentTopic;

    //if question was too easy then pass to an easier topic
    if (currentQuestion.difficulty < 0.2 || !currentQuestion.easierQuestion) {
      newTopic = this.changeTopic(true, currentTopic, tree.topics);
    }

    //Setting new expected difficulty
    let expectedDifficulty: number = currentQuestion.difficulty - 0.2;
    if (currentTopic === newTopic && expectedDifficulty < 0) {
      expectedDifficulty = 0.2;
    }
    if (currentTopic !== newTopic) {
      expectedDifficulty = 0.8;
    }

    //evaluating the question difficulty and selecting new easier question
    newQuestion = newTopic.rootNode!;

    let keepSearching: boolean = true;
    let existNextNode: boolean = true;
    let candidateNode: Question;
    if (newQuestion) {
      while (keepSearching) {
        if (newQuestion.difficulty >= expectedDifficulty) {
          if (newQuestion.easierQuestion) {
            candidateNode = newQuestion.easierQuestion;
          } else {
            existNextNode = false;
          }
        } else if (newQuestion.difficulty <= expectedDifficulty) {
          if (newQuestion.harderQuestion) {
            candidateNode = newQuestion.harderQuestion;
          } else {
            existNextNode = false;
          }
        }

        if (existNextNode) {
          if (Math.abs(newQuestion.difficulty - expectedDifficulty) > Math.abs(candidateNode!.difficulty - expectedDifficulty)) {
            newQuestion = candidateNode!;
          } else {
            if (JSON.stringify(newQuestion) === JSON.stringify(currentQuestion)) {
              newQuestion = candidateNode!;
            } else {
              keepSearching = false;
            }
          }
        } else {
          let candidateTopic: Topic = this.changeTopic(true, currentTopic, tree.topics);
          if (JSON.stringify(candidateTopic) === JSON.stringify(currentTopic)) {
            keepSearching = false;
          } else {
            currentTopic = candidateTopic;
            newQuestion = currentTopic.rootNode!;
          }
        }
      }
    }

    return { question: { ...newQuestion }, topic: { ...newTopic } };
  }

  public getHarderQuestion(currentTopic: Topic, currentQuestion: Question, tree: GameTree): { question: Question, topic: Topic } | undefined {
    let newQuestion: Question | undefined;
    let newTopic: Topic = currentTopic;

    //if question was hard enough then pass to a harder topic
    if (currentQuestion.difficulty > 0.75 || !currentQuestion.harderQuestion) {
      console.log('calling from here');
      newTopic = this.changeTopic(false, currentTopic, tree.topics);
    }

    //Setting new expected difficulty
    let expectedDifficulty: number = currentQuestion.difficulty + 0.2;
    if (JSON.stringify(currentTopic) === JSON.stringify(newTopic) && expectedDifficulty > 1) {
      expectedDifficulty = 0.8;
    }
    if (JSON.stringify(currentTopic) !== JSON.stringify(newTopic)) {
      expectedDifficulty = 0.2;
    }

    //evaluating the question difficulty and selecting new easier question
    newQuestion = newTopic.rootNode!;

    let keepSearching: boolean = true;
    let existNextNode: boolean = true;
    let candidateNode: Question;
    if (newQuestion) {
      while (keepSearching) {
        if (newQuestion.difficulty >= expectedDifficulty) {
          if (newQuestion.easierQuestion) {
            candidateNode = newQuestion.easierQuestion;
          } else {
            existNextNode = false;
          }
        } else if (newQuestion.difficulty <= expectedDifficulty) {
          if (newQuestion.harderQuestion) {
            candidateNode = newQuestion.harderQuestion;
          } else {
            existNextNode = false;
          }
        }

        if (existNextNode) {
          if (Math.abs(newQuestion.difficulty - expectedDifficulty) > Math.abs(candidateNode!.difficulty - expectedDifficulty)) {
            newQuestion = candidateNode!;
          } else {
            if (JSON.stringify(newQuestion) === JSON.stringify(currentQuestion)) {
              newQuestion = candidateNode!;
            } else {
              keepSearching = false;
            }
          }
        } else {
          let candidateTopic: Topic = this.changeTopic(true, currentTopic, tree.topics);
          if (JSON.stringify(candidateTopic) === JSON.stringify(currentTopic)) {
            keepSearching = false;
          } else {
            currentTopic = candidateTopic;
            newQuestion = currentTopic.rootNode!;
          }
        }
      }
    }

    return { question: { ...newQuestion }, topic: { ...newTopic } };
  }

  private changeTopic(easier: boolean, currentTopic: Topic, topics: Topic[]): Topic {
    let newTopic: Topic = topics[0];
    if (easier) {
      topics.forEach(topic => {
        if (Math.abs(topic.difficulty - currentTopic.difficulty) <= Math.abs(newTopic.difficulty - currentTopic.difficulty)
          && topic.difficulty <= currentTopic.difficulty) {
          newTopic = { ...topic };
        }
      });
    } else {
      topics.forEach(topic => {
        if (Math.abs(topic.difficulty - currentTopic.difficulty) >= Math.abs(newTopic.difficulty - currentTopic.difficulty)
          && topic.difficulty >= currentTopic.difficulty) {
          newTopic = { ...topic };
        }
      });
    }
    return newTopic;
  }
}

