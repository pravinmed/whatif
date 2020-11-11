import {
 RECEIVE_QUESTIONS,
 UPDATE_VOTES,
 ADD_QUESTION,
 receiveQuestions
 } from '../actions/questions'


 /*dan_abramov: {
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
 /*
    qid,
    userid,
    option*/
 export default function questions(state = {}, action)
 {
    if (action.option === 'option1') {
        console.log(" Option1 ");
    }
     if ( action.option === 'option2')
     {
         console.log(" Option2 ");
     }
     switch(action.type)
     {
         case RECEIVE_QUESTIONS:
             return {
                 ...state,
                 ...action.question
             }
        
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id] : action.question
            }
        case UPDATE_VOTES:
            let retObj =  {
                ...state,
                [action.questionId] : {
                   ...state[action.questionId],
                option1 : action.option === 'option1' ? {
                          ...state[action.questionId].option1,
                          whoVoted : state[action.questionId].option1.whoVoted.concat([action.authedUser.id])
                        } : {
                        ...state[action.questionId].option1
                        } ,
                 option2 : action.option === 'option2' ? {
                         ...state[action.questionId].option2,
                         whoVoted:  state[action.questionId].option2.whoVoted.concat([action.authedUser.id])
                    } : {
                    ...state[action.questionId].option2
                    } 
               
                }




            }
            console.log(" Return object in Update Votes ", retObj)
            return retObj;
        default :
            return state
     }
 }