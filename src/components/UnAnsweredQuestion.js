/* Shows the unanswered question */
/*
 User asks ...

 Photo   Question ...
          option 1 
          option 2
          Submit 
 */

import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import ScoreCard from "./ScoreCard";
import {Link, Redirect, withRouter} from 'react-router-dom'
import {handleVote} from "../actions/shared";

class UnAnsweredQuestion extends  React.Component
{
    state = {
        vote :'option1',
    }
    onButtonClick =(evt, id) => {
        const {qid} = this.props;
        console.log(" Button click ", evt.target);
        console.log(" Button click ID  ", qid);

        evt.preventDefault();
        this.props.dispatch(handleVote(qid, this.state.vote))
        //this.props.history.push(`/questions/${qid}`)
    }

    onCheckedOption1 = (evt, id) => {
        console.log(" Option1 click ", evt);

        this.setState(()=> ({
            vote : 'option1'
        }))
    }

    onCheckedOption2 = (evt, id) => {
        console.log(" Option2 click ", evt);
        this.setState(()=> ({
            vote : 'option2'
        }))

    }

    render()
    {
        const {authedUser,questions, qid, userInfo} = this.props;
        if (userInfo === null || typeof userInfo === 'undefined'){
            return ( <Redirect to="/" />);
        }
        console.log(" Questions ",questions)
        let option1 = true;
        let option2 = false;
        if (this.state.vote === 'option1') {
            option1 = true;
            option2 = false
        } else {
            option2 = true;
            option1 = false;
        }
        option1 === true ? console.log(" option1 clicked ") : console.log('option2  selected ')
        option2 === true ? console.log(" option2 clicked ") : console.log('option1  selected ')

        return (
            <div className='a'>
                <div className='grid-container'>
                    <div className="item1">
                        User {authedUser.name} asks
                    </div>
                    <div className="item2">
                        <img src={userInfo.avatarURL} height="300" width ="150" />
                    </div>
                    <div className="item3">
                        <div>
                            <input type="radio" id="option1" name="option1" value="huey" defaultChecked={true} checked={option1 === true}  onChange={this.onCheckedOption1}  />
                                <label htmlFor="huey">{questions[qid].option1.text}</label>
                        </div>
                                OR
                        <div>
                            <input type="radio" id="option2" name="option2" checked={option2 === true} onChange={this.onCheckedOption2} value="dewey"  />
                                <label htmlFor="dewey">{questions[qid].option2.text}</label>
                        </div>
                    </div>
                    <div className="item5">
                        <button className="button" style={ {height:100, width:275}} onClick={this.onButtonClick}  value="Submit" >
                            Submit
                        </button>
                    </div>
              </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users},{match})
{
    console.log(" Match in UnAnswered Question  " ,match)
    console.log(" authedUser in UnAnswered Question  " ,authedUser)
    const userInfo = Object.values(users).filter((user) => {
        return user.id === authedUser.id
    });
    console.log("  User Info ", userInfo[0])
    const qid = match.params.id;
    return {
        authedUser,
        questions,
        userInfo : userInfo[0],
        qid,
    }
}

export default  withRouter(connect(mapStateToProps)(UnAnsweredQuestion))