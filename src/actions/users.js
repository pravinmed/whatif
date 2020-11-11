
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER = 'ADD_ANSWER'

export function addUserAnswer(userid, answer)
{
    return {
        type : ADD_ANSWER,
        userid,
        answer
    }
}

/*
  Add the question to the users list.
 */
export function addUserQuestion(userid, questionid)
{
    return {
        type : ADD_QUESTION_TO_USER,
        questionid,
        userid,
    }
}

export function receiveUsers(users) {
    return {
        type : RECEIVE_USERS,
        users
    }
}