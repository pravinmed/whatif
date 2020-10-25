
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

export function addUserAnswer(userid, answer)
{
    return {
        type : ADD_ANSWER,
        userid,
        answer
    }
}


export function addUserQuestion(userid, questionid)
{
    return {
        type : ADD_QUESTION,
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