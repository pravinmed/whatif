import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAndAnswers,
 } from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => (    
    {
    users,
    questions,
  }))
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAndAnswers (info) {
  console.log("Save Questions And Answers", info)
  return _saveQuestionAndAnswers(info)
}