let users = {
  sarah_edo: {
    id: "sarah_edo",
    name: "Sarah Drasner",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    questions: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a'],
    answers : {
      "8xf0y6ziyjabvozdd253nd" : "option1",
      "hbsc73kzqi75rg7v1e0i6a" : "option2",
      "omdbjl68fxact38hk7ypy6" : "option2"
    }
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
    questions: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', 'xi3ca2jcfvpa0i3t4m7ag'],
    answers : {
      "f4xzgapq7mu783k9t02ghx" : "option1",
      "hbsc73kzqi75rg7v1e0i6a" : "option2",
      "5c9qojr2d1738zlx09afby" : "option2"
    }
  },
  dan_abramov: {
    id: "dan_abramov",
    name: "Dan Abramov",
    avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
    questions: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
    answers : {
      "omdbjl68fxact38hk7ypy6" : "option1",
      "hbsc73kzqi75rg7v1e0i6a" : "option2",
      "5c9qojr2d1738zlx09afby" : "option1",
      "f4xzgapq7mu783k9t02ghx" : "option1"
    }
  }
}

let questions = {
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    author: "tylermcginnis",
    timestamp: 1518122597860,
    option1 : {
      whoVoted : ['dan_abramov'],
      text: "would you rather vote option1 (First question)"
    },
    
    option2 :{
      whoVoted : ['tylermcginnis'],
      text: "would you rather vote option1 (Second question)"
    }
  },

  "omdbjl68fxact38hk7ypy6": {
    id: "omdbjl68fxact38hk7ypy6",
    author: "tylermcginnis",
    timestamp: 1518043995650,
    option1 : {
      whoVoted : ['dan_abramov'],
      text: "would you rather vote Hello (First question)"
    },
    
    option2 :{
      whoVoted : ['tylermcginnis'],
      text: "would you rather vote Hello2 (Second question)"
    }
  },
  "f4xzgapq7mu783k9t02ghx": {
    id: "f4xzgapq7mu783k9t02ghx",
    author : "dan_abramov",
    option1 : {
      whoVoted : ['tylermcginnis'],
      text: "would you rather vote f4xzgapq7mu783k9t02ghx (First question)"
    },
    
    option2 :{
      whoVoted : ['dan_abramov'],
      text: "would you rather vote f4xzgapq7mu783k9t02ghx (Second question)"
    }
  
  },
  "hbsc73kzqi75rg7v1e0i6a": {
    id: "hbsc73kzqi75rg7v1e0i6a",
    author: "sarah_edo",
    timestamp: 1516043995650,
    option1 : {
      whoVoted : ['tylermcginnis'],
      text: "would you rather vote hbsc73kzqi75rg7v1e0i6a (First question)"
    },
    
    option2 :{
      whoVoted : ['tylermcginnis','sarah_edo'],
      text: "would you rather vote hbsc73kzqi75rg7v1e0i6a (Second question)"
    }
  
   },
  
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}



function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formattedQuestion ({ author, optionone, optiontwo }) {
  return {
    author,
    id: generateUID(),
    option1 : { whoVoted :[], text : optionone},
    option2 : { whoVoted :[], text : optiontwo},
    timestamp: Date.now(),
  }
}


/*sarah_edo: {
  id: "sarah_edo",
  name: "Sarah Drasner",
  avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
  tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
},*/

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const formattedQuestion = formattedQuestion(question);
    const authUser = question.author;

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      }

      users = {
        ...users,
        [authUser]: {
          ...users[authUser],
          questions: users[authUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}



/* the answer to the question already saved  */
export function _saveQuestionAndAnswers({whichUser, questionId, answer})
{
  return new Promise((res, rej) => {
   // answer is option1 or option2. 
   // when using the [] brackets the value will be computed.
    setTimeout(() => {
      questions = {
        ...questions,
        [questionId] : {
          ...questions[questionId],
          [answer] : {
            ...questions[questionId][answer],
            whoVoted: questions[questionId][answer].whoVoted.concat([whichUser])
          }
        }  
      }

      users = {
        ...users,
        [whichUser]: {
          ...users[whichUser],
          answers: {
            ...users[whichUser].answers,
            [questionId] : answer
          }
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}
