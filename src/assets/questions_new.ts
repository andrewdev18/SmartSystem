import { Question, QuestionType, Topic } from "src/app/game/game.interfaces";



export const topic1: Topic = {
  title: 'Present Simple', difficulty: 0.2,
  content: 'Para conjugar el presente simple usamos el infinitivo para los sujetos “I”, “you”, “we” y “they” y para las terceras personas “he”, “she” y “it”, añadimos una “-s” al final del verbo. La estructura de una sentencia es es Sujeto + verbo.',
  examples: [`I visit my mother on Sunday.`, `He never eats vegetables.`, `I am a excelent student`, `Kira isn't a Doctor.`]
};

export const topic2: Topic = {
  title: 'Present continuous', difficulty: 0.4,
  content: 'El "present continuous" de cualquier verbo se compone de dos partes: el presente del verbo to be + el "present participle" del verbo principal. (Para formar el "present participle": raíz+ing, e.g. talking, playing, moving, smiling)',
  examples: ["He is playing soccer right now.", "They are studying for the exam.", "She's cooking dinner in the kitchen.", "We are watching a movie tonight."]
};

export const topic3: Topic = {
  title: 'Future Perfect', difficulty: 0.6,
  content: 'El "future perfect" está compuesto por dos elementos: el "simple future" del verbo "to have" (will have) + el "past participle" del verbo principal',
  examples: ["By tomorrow, she will have finished the report.", "They will have completed the construction by next month.", "By the time you arrive, I will have cleaned the house.", "He will have read the entire book by the end of the week."]
};

export const topic4: Topic = {
  title: 'Past Perfect Continuous ', difficulty: 0.9,
  content: 'El "past perfect continuous" está compuesto por dos elementos: el "past perfect" del verbo to be (=had been) + el "present participle" del verbo principal (raíz+ing).',
  examples: ["They had been watching TV all evening.", "She had been working on the project for hours before the meeting.", "By the time I arrived, they had been waiting for ages.", "He had been playing the guitar for years before he joined the band."]
}

export const questions: Question[] = [
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.5, content: [
      { isAnswer: false, text: 'He' },
      { isAnswer: true, text: '', options: ['drive', 'drives', 'is drive', 'is drives'], answerIndex: 1 },
      { isAnswer: false, text: 'to work everyday.' }
    ]
    ,topic: topic1
  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.7, content: [
      { text: 'I', isAnswer: false },
      { text: '', isAnswer: true, answers: ['am', `'m`] },
      { text: 'a professional soccer player. My brother', isAnswer: false },
      { text: '', isAnswer: true, answers: ['plays'] },
      { text: 'soccer too.', isAnswer: false }
    ]
    ,topic: topic1
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.1, content: [
      { text: 'Your friends', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `are`, wrongOpt: `is` },
      { text: `big Coldplay's fans.`, isAnswer: false },
    ]
    ,topic: topic1
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.2, content: [
      { text: 'Your sister', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `is`, wrongOpt: `are` },
      { text: `a great doctor.`, isAnswer: false },
    ]
    ,topic: topic1
  },
  {   //Sort the sentece
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.8, content: [
      { text: `Tom and Katy`, position: 0 },
      { text: `aren't`, position: 1 },
      { text: `in the same class`, position: 2 }
    ]
    ,topic: topic1
  },
  {   //Sort the sentece
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.9, content: [
      { text: `I walk my dog`, position: 0 },
      { text: `in the park`, position: 1 },
      { text: `every evening`, position: 2 }
    ]
    ,topic: topic1
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.3, content: [
      { text: 'My Playstation 5', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `is`, wrongOpt: `are` },
      { text: `very noisy right now.`, isAnswer: false },
    ]
    ,topic: topic1
  },
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.5, content: [
      { isAnswer: false, text: 'He' },
      { isAnswer: true, text: '', options: ['drive', 'drives', 'is driving', 'is drives'], answerIndex: 2 },
      { isAnswer: false, text: 'to work right now.' }
    ]
    ,topic: topic2
  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.7, content: [
      { text: `I'm`, isAnswer: false },
      { text: '', isAnswer: true, answers: ['spending'] },
      { text: '(spend) time with my friends.', isAnswer: false }
    ]
    ,topic: topic2
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.6, content: [
      { text: 'Your friends', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `are`, wrongOpt: `is` },
      { text: `going to a Coldplay's concert.`, isAnswer: false },
    ]
    ,topic: topic2
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.2, content: [
      { text: 'Your sister', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `is studying`, wrongOpt: `is study` },
      { text: `medicine in college.`, isAnswer: false },
    ]
    ,topic: topic2
  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.1, content: [
      { text: `Mia and Kane`, position: 0 },
      { text: `are`, position: 1 },
      { text: `not`, position: 2 },
      { text: `selling`, position: 3 },
      { text: `their car.`, position: 4 }
    ]
    ,topic: topic2
  },
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.4, content: [
      { isAnswer: false, text: 'They' },
      { isAnswer: true, text: '', options: ['rejecting', 'are rejecting', 'rejects', 'are rejected'], answerIndex: 1 },
      { isAnswer: false, text: 'the job offer.' }
    ]
    ,topic: topic2
  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.3, content: [
      { text: `The employers`, position: 0 },
      { text: `are`, position: 1 },
      { text: `not`, position: 2 },
      { text: `giving`, position: 3 },
      { text: `money to their people.`, position: 4 }
    ]
    ,topic: topic2
  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.7, content: [
      { text: `By tomorrow,`, isAnswer: false },
      { text: 'I will', isAnswer: true, answers: ['have finished'] },
      { text: 'my assignment.', isAnswer: false }
    ]
    ,topic: topic3
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.6, content: [
      { text: 'They will have', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `completed`, wrongOpt: `completing` },
      { text: `the project by next week.`, isAnswer: false },
    ]
    ,topic: topic3

  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.2, content: [
      { text: 'By the time you arrive, ', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `I will have`, wrongOpt: `My will have` },
      { text: `cooked dinner.`, isAnswer: false },
    ]
    ,topic: topic3

  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.8, content: [
      { text: `He will`, position: 0 },
      { text: `have learned`, position: 1 },
      { text: `to play the guitar`, position: 2 },
      { text: `by`, position: 3 },
      { text: `the concert.`, position: 4 }
    ]
    ,topic: topic3
  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.9, content: [
      { text: `The train`, isAnswer: false },
      { text: 'will', isAnswer: true, answers: ['have departed'] },
      { text: 'before we get to the station.', isAnswer: false }
    ]
    ,topic: topic3
  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.5, content: [
      { text: `By the time the`, position: 0 },
      { text: `movie ends`, position: 1 },
      { text: `we will have`, position: 2 },
      { text: `eaten`, position: 3 },
      { text: `all the popcorn`, position: 4 }
    ]
    ,topic: topic3
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.6, content: [
      { text: 'She', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `will have saved`, wrongOpt: `will had saved` },
      { text: `enough money for her trip.`, isAnswer: false },
    ]
    ,topic: topic3
  },
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.8, content: [
      { isAnswer: false, text: 'They' },
      { isAnswer: true, text: '', options: ['had been studying', 'studying', 'have been study', 'study'], answerIndex: 0 },
      { isAnswer: false, text: 'for hours before the exam.' }
    ]
    ,topic: topic4

  },
  {   //Complete word
    instruction: "Complete the sentence with the correct words.", type: QuestionType.CompleteWord, difficulty: 0.7, content: [
      { text: `By the time I arrived, they had`, isAnswer: false },
      { text: '', isAnswer: true, answers: ['been waiting'] },
      { text: 'for over an hour.', isAnswer: false }
    ]
    ,topic: topic4
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.3, content: [
      { text: 'They', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `had`, wrongOpt: `have` },
      { text: `been travelling around Europe.`, isAnswer: false },
    ]
    ,topic: topic4
  },
  {   //Select A/B
    instruction: "Select the correct option.", type: QuestionType.ChooseOption, difficulty: 0.2, content: [
      { text: 'By the end of the party, she ', isAnswer: false },
      { text: '', isAnswer: true, correctOpt: `had been dancing`, wrongOpt: `have being dancing` },
      { text: `non-stop and techno.`, isAnswer: false },
    ]
    ,topic: topic4
  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.4, content: [
      { text: `They were exhausted`, position: 0 },
      { text: `because`, position: 1 },
      { text: `they`, position: 2 },
      { text: `had been`, position: 3 },
      { text: `hiking up`, position: 4 },
      { text: `the mountain`, position: 5 },
      { text: `all day`, position: 6 }
    ]
    ,topic: topic4
  },
  {   //Sort the sentence
    instruction: "Put the words/phrases in correct order.", type: QuestionType.SortSentence, difficulty: 0.9, content: [
      { text: `She`, position: 0 },
      { text: `had`, position: 1 },
      { text: `been`, position: 2 },
      { text: `saving`, position: 3 },
      { text: `money`, position: 4 },
      { text: `for`, position: 5 },
      { text: `a year`, position: 6 },
      { text: `to buy`, position: 7 },
      { text: `a new car`, position: 8 }
    ]
    ,topic: topic4
  },
  {   //Multiple options
    instruction: "Select the correct answer.", type: QuestionType.SelectOne, difficulty: 0.6, content: [
      { isAnswer: false, text: 'He' },
      { isAnswer: true, text: '', options: ['had', 'had been', 'have been', 'having being'], answerIndex: 1 },
      { isAnswer: false, text: 'practicing the piano every day.' }
    ]
    ,topic: topic4
  }
];

// export const questions: any = [qPresentSimple, qPresentContinuous, qFuturePerfect, qPastPerfectContinuous];