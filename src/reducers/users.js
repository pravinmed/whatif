import {
    RECEIVE_USERS,
    ADD_QUESTION,
    ADD_ANSWER,
} from '../actions/users'

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
        case ADD_QUESTION:
            return {
                ...state,
                [action.userId]:{
                     ...state[action.userId],
                    questions: state[action.userId].questions.concat([action.questionId])
                }
            }
        case ADD_ANSWER:
            return {
                ...state,
                [action.userId] : {
                    ...state[action.users],
                    answers : {...state[action.userId].answers, ...action.answer}
                }
            }
        default:
            return state
            

    }
}