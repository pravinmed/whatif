import {saveLikeToggle, saveTweet, saveQuestion} from '../utils/api';

import { hideLoading, showLoading} from 'react-redux-loading';


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_VOTES = 'UPDATE_VOTES';
export const ADD_QUESTION = 'ADD_QUESTIONS'


export function receiveQuestions(question) {
    return {
        type: RECEIVE_QUESTIONS,
        question
    }
}

export function updateVotes ({qid, userid,option}) {
    return {
        type : UPDATE_VOTES,
        qid,
        userid,
        option
    }
}


export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,
    }
}

