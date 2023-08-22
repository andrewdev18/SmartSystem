import { Question, QuestionType, Topic } from "src/app/game/game.interfaces";

export const topics: Topic[] = [
  { title: 'Present simple', difficulty: 0.05, content: '', examples: [] },
  { title: 'Present continuous', difficulty: 0.1, content: '', examples: [] }
];

export const qPresentSimple: Question[] = [
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.5, content: [
      { isAnswer: false, text: 'He' },
      { isAnswer: true, text: '', options: ['drive', 'drives', 'is drive', 'is drives'], answerIndex: 1 },
      { isAnswer: false, text: 'to work everyday.' }
    ]
  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.7, content: [
      { text: 'I', isAnswer: false },
      { text: '', isAnswer: true, answers: ['am', `'m`] },
      { text: 'a professional soccer player. My brother', isAnswer: false },
      { text: '', isAnswer: true, answers: ['plays'] },
      { text: 'soccer too.', isAnswer: false }
    ]
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.1, content: [
      { text: 'Your friends', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `are`, wrongOpt: `is` },
      { text: `big Coldplay's fans.`, isAnswer: false },
    ]
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.2, content: [
      { text: 'Your sister', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `is`, wrongOpt: `are` },
      { text: `a great doctor.`, isAnswer: false },
    ]
  },
  {   //Sort the sentece
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.8, content: [
      { text: `Tom and Katy`, position: 0 },
      { text: `aren't`, position: 1 },
      { text: `in the same class`, position: 2 }
    ]
  }
]

export const qPresentContinuous: Question[] = [
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.5, content: [
      { isAnswer: false, text: 'He' },
      { isAnswer: true, text: '', options: ['drive', 'drives', 'is driving', 'is drives'], answerIndex: 2 },
      { isAnswer: false, text: 'to work right now.' }
    ]
  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.7, content: [
      { text: `I'm`, isAnswer: false },
      { text: '', isAnswer: true, answers: ['spending'] },
      { text: '(spend) time with my friends.', isAnswer: false }
    ]
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.6, content: [
      { text: 'Your friends', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `are`, wrongOpt: `is` },
      { text: `going to a Coldplay's concert.`, isAnswer: false },
    ]
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.2, content: [
      { text: 'Your sister', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `is studying`, wrongOpt: `is study` },
      { text: `medicine in college.`, isAnswer: false },
    ]
  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.4, content: [
      { text: `Mia and Kane`, position: 0 },
      { text: `are`, position: 1 },
      { text: `not`, position: 2 },
      { text: `selling`, position: 3 },
      { text: `their car.`, position: 4 }
    ]
  }
]