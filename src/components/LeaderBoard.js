/*

  List of ScoreCard (in ScoreCard.js)
 */

import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {Link, Redirect, withRouter} from 'react-router-dom'
import  '../scss/style.scss';
import {handleNewQuestion, handleVote} from "../actions/shared";


class LeaderBoard extends  React.Component
{

    getAnsweredQuestions(user){
        return user.questions.length;
    }

    getCreatedQuestions(){

    }

    render()
    {
        const {questions, authedUser, users} = this.props;

        let userValues = Object.values(users);
        console.log(" User val before ",userValues)
        userValues.sort((user1, user2) => (
             (user2.questions.length + Object.values(user2.answers).length ) -
             (user1.questions.length  + Object.values(user1.answers).length)
        ));

        console.log(userValues)

        return (
            <div>
              {userValues.map(user => (
                <div className='wrapper'>
                    <div className="box">
                        <img src={user.avatarURL} width="280" height="200" />

                    </div>
                    <div>
                        <div class="box box2">
                            <div className="nested"><h2>{user.name}</h2></div>
                            <div className="nested">Answered Question = {Object.values(user.answers).length}</div>
                            <div className="nested">Created Question = {user.questions.length}</div>
                        </div>

                    </div>
                    <div>
                        <div className="box box3">
                            <div className="nested"><h3>Points</h3></div>
                            <div className="nested">xx</div>
                        </div>
                    </div>

                 </div>
              ))}
            </div>
        )
    }
}


function mapStateToProps({authedUser,questions, users}){
    let id  = '';
    console.log(" In question board ");
    let userInfo = null;
    if (Object.values(users).length > 0) {
        userInfo = Object.values(users).filter((user) => {
            return user.id === authedUser.id
        });
    }


    return {
        questions,
        authedUser,
        users : Object.values(users)
    }
}

export default  withRouter(connect(mapStateToProps)(LeaderBoard))