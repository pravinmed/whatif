import {
    RECEIVE_USERS,
    ADD_QUESTION_TO_USER,
    ADD_ANSWER,
} from '../actions/users'
import questions from "./questions";

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
}*/

export default function users(state = {}, action)
{

    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            let retObj = {
                ...state,
                [action.userid]:{
                     ...state[action.userid],
                    questions:
                        state[action.userid].questions.concat([action.questionid])
                }
            }
            console.log(" Return obj in ADD_QUESTION ", retObj);
            return retObj;
        case ADD_ANSWER:
            return {
                ...state,
                [action.userid.id] : {
                    ...state[action.userid.id],
                    answers :
                        {...state[action.userid.id].answers, ...action.answer}
                }
            }
        default:
            return state
            

    }
}