import {getInitialData} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'
import { receiveQuestions, updateVotes,addQuestion } from './questions'
import {saveQuestion, saveQuestionAndAnswers} from  '../utils/api'
import {addUserQuestion , receiveUsers, addUserAnswer} from './users'
// Initial data handling.
// dispatch() will call the actions and is sent to the reducers
const AUTHED_ID = ['tylermcginnis'];
export function handleInitialData()
{
    return (dispatch)=>{
        console.log(" Handle Initial Data ");
    
        dispatch(showLoading());
       return  getInitialData().then
       (({users,questions}) => {
        dispatch(receiveUsers(users)); 
        dispatch(receiveQuestions(questions));
        }).then(dispatch(hideLoading()));
    };
}

export function handleNewQuestion(optionone, optiontwo)
{
    return (dispatch, getState) => {
        let {authedUser} = getState();

        let questionId = '';
        dispatch(showLoading());
        return saveQuestion({
            optionone,
            optiontwo,
            author : authedUser.id
        })
           .then( (formattedQuestion) => {
            questionId = formattedQuestion.id
            dispatch(addQuestion(formattedQuestion))
            return questionId
        }) 
            .then( () => {
                dispatch(addUserQuestion(authedUser.id, questionId));
            })
            .then( () => {
             dispatch(hideLoading())
             return questionId
        })

    }
}

export function handleVote(questionId, option){
    return (dispatch, getState) => {
        let {authedUser} = getState();

        let questionId = '';
        let answerObj = {[questionId] : option}
        
        return saveQuestionAndAnswers( 
        {
            authedUser : authedUser.id, 
            questionId,
            answer:option // option = option1 or option2.
        }
        )
        .then( ()=> dispatch(updateVotes(questionId, authedUser.id, option)))
        .then ( () => dispatch(addUserAnswer(authedUser.id, answerObj)))

       
    }
}
