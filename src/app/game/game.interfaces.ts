import { Question } from "./question.class";

export interface GameTree {
    topics: TopicNode[];
}

export interface TopicNode {
    topic: Topic;
    difficulty: number;
    rootNode: QuestionNode;
}

export interface Topic {
    title: string;
    content: string;
    examples: string[];
}

export interface QuestionNode {
    question: Question;
    difficulty: number;
    easierQuestion?: QuestionNode;
    harderQuestion?: QuestionNode;
}

export enum QuestionType {
    CompleteWord,
    ChooseOption,
    SortSentence,
    SelectOne,
    None
}

export interface QWordComplete {    
    text: string;
    isAnswer: boolean;
    answers?: string[];
}

export interface QChooseOption {
    text: string;
    isAnswer: boolean;
    correctOpt?: string;
    wrongOpt?: string;
}

export interface QSortSentece {
    text: string;
    position: number;
}

export interface QSelectOne {
    text: string;
    isAnswer: boolean;
    options?: string[];
    answerIndex?: number;
}