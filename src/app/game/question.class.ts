import { QChooseOption, QSelectOne, QSortSentece, QWordComplete, QuestionType } from "./game.interfaces";

export class Question {
    private _instruction: string;
    private _content?: QWordComplete[] | QChooseOption[] | QSortSentece[] | QSelectOne[];
    private _type: QuestionType = QuestionType.None;

    constructor() {
        this._instruction = "";
    }

    public set instruction(sentence: string) {
        this._instruction = sentence;
    }

    public get instruction(): string {
        return this._instruction;
    }

    public set content(questionStructure: QWordComplete[] | QChooseOption[] | QSortSentece[] | QSelectOne[] | undefined) {
        this._content = questionStructure;
    }

    public get content(): QWordComplete[] | QChooseOption[] | QSortSentece[] | QSelectOne[] | undefined {
        return this._content;
    }

    public set type(type: QuestionType) {
        this._type = type;
    }

    public get type(): QuestionType {
        return this._type;
    }

    public checkAnswer(): boolean {
        if (this._type == QuestionType.ChooseOption) {
            return this.checkChooseOption(<QChooseOption[]>this._content);
        }
        if (this._type == QuestionType.CompleteWord) {
            return this.checkCompleteWord(<QWordComplete[]>this._content);
        }
        if (this._type == QuestionType.SelectOne) {
            return this.checkSelectOne(<QSelectOne[]>this._content);
        }
        if (this._type == QuestionType.SortSentence) {
            return this.checkSortOption(<QSortSentece[]>this._content);
        }
        return false;
    }

    private checkCompleteWord(exercise: QWordComplete[]): boolean {
        let correctAnswer: boolean = true;
        let answers: QWordComplete[] = [];
        exercise.forEach(segment => {
            if (segment.isAnswer) {
                exercise.push(segment);
            }
        });
        answers.forEach(element => {
            let isCorrect: boolean = false;
            element.answers?.forEach(opt => {
                if (element.text == opt) {
                    isCorrect = true;
                }
                if (!isCorrect) {
                    correctAnswer = false;
                }
            })
        });
        return correctAnswer;
    }

    private checkChooseOption(exercise: QChooseOption[]): boolean {
        let isCorrect: boolean = true;
        let answer: QChooseOption = { text: '', isAnswer: false, correctOpt: 'C', wrongOpt: 'W' };
        exercise.forEach(segment => {
            if (segment.isAnswer) {
                answer = segment;
            }
        });
        if (answer.text == answer.correctOpt) {
            return true;
        } else {
            return false;
        }
    }

    private checkSortOption(exercise: QSortSentece[]): boolean {
        let isCorrect: boolean = true;
        exercise.forEach((element, index) => {
            if (element.position != index) {
                isCorrect = false;
            }
        });
        return isCorrect;
    }

    private checkSelectOne(exercise: QSelectOne[]): boolean {
        let isCorrect: boolean = false;
        let answer: QSelectOne = { text: '', isAnswer: true, options: [], answerIndex: 0 };
        exercise.forEach(element => {
            if (element.isAnswer) {
                answer = element;
            }
        });
        if (answer.text == answer.options![answer.answerIndex!]) {
            isCorrect = true;
        }
        return isCorrect;
    }
}