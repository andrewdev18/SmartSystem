// import { Question } from "./question.class";

export interface GameTree {
    topics: Topic[];
}

export interface Topic {
    title: string;
    content: string;
    examples: string[];
    difficulty: number;
    rootNode?: Question;
}

export interface Question {
    instruction: string;
    content?: QWordComplete[] | QChooseOption[] | QSortSentece[] | QSelectOne[];
    type: QuestionType;
    difficulty: number;
    easierQuestion?: Question;
    harderQuestion?: Question;
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