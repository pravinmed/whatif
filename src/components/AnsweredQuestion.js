import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import  '../scss/style.scss';
import ScoreCard from "./ScoreCard";


class AnsweredQuestion extends  React.Component
{

    render()
    {
        const {questions, authedUser, userInfo, qid, users} = this.props;
        let quest = Object.values(questions).filter((question) => {
           return question.id === qid
        });
        let question;
        if (quest.length > 0) {
            question = quest[0]
        } else {
            return (
                <div></div>
            )
        }
        console.log(" user info  ", userInfo);


        let option1Ans = question.option1.whoVoted.includes(userInfo.id);
        let option2Ans = question.option2.whoVoted.includes(userInfo.id);
        console.log(" Option1  ", question);

        console.log(" User Asked   ", users);


        let askedUser = Object.values(users).filter((user) => {
            return user.questions.includes(question.id)
        })


        let userAskedName = askedUser.length > 0 ? askedUser[0].name : '';


        return (
           <div>
            <h4> Answered Questions</h4>
            <div className='grid-container'>
                <div className="item1">
                    User {userAskedName} asks
                </div>
                <div className="item2">
                   <img src={userInfo.avatarURL} height="300" width ="150" />
                </div>
                <div className="item3" style = {{width : 1000 + 'px'}}>
                    <ScoreCard question={question} optionAns = {option1Ans === true} option ={'option1'} />
                </div>
                <div className="item5" style = {{width : 1000 + 'px'}}>
                    <ScoreCard question={ question} optionAns = {option2Ans === true} option={'option2'} />
                </div>

            </div>
           </div>
        )
    }
}


function mapStateToProps({authedUser,questions, users}, {match}){
    let id  = '';
    if (typeof match !== 'undefined') {
        id = match.params.id;
    }
    const userInfo = Object.values(users).filter((user) => {
       return user.id === authedUser.id
    });
    console.log("  User Info ", userInfo[0])

    return {
        questions,
        authedUser,
        userInfo : userInfo[0],
        qid : id,
        users,
    }
}

export default  withRouter(connect(mapStateToProps)(AnsweredQuestion))