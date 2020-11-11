import {saveLikeToggle, saveTweet, saveQuestion} from '../utils/api';

import { hideLoading, showLoading} from 'react-redux-loading';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_VOTES = 'UPDATE_VOTES';
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions(question) {
    return {
        type: RECEIVE_QUESTIONS,
        question
    }
}

export function updateVotes ({questionId, authedUser,option}) {
    console.log(" Question ID", questionId);
    return {
        type : UPDATE_VOTES,
        questionId,
        authedUser,
        option
    }
}


export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,
    }
}

