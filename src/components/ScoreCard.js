/* Individual Score

         Name                    Score
Photo :  Answered Question  : x  xx
        Created Questions   : y
 */

import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import  '../scss/style.scss';


class ScoreCard extends React.Component
{
    render() {
        const {question, option} = this.props;
        console.log(" Question and Option ", question,option)
        let quest = question[option].text;
        let votes =  question[option].whoVoted.length;
        let actVotes = votes;
        let totalVotes = votes;
        if (option === 'option1') {
            totalVotes += question['option2'].whoVoted.length;
        } else {
            totalVotes += question['option1'].whoVoted.length;
        }
        votes = (votes/totalVotes)*100;
        let {optionAns} = this.props;

        return (
            <div>
                <div className="progress " >
                    { optionAns === true ?
                        <div className="circle" >Your Vote</div> :
                        <div></div>
                    }
                    <div id ="progressbar" style = { {width : votes + "%"}}>
                        <div >{Math.round(votes)}%</div>
                    </div>
                        <span >
                    {quest}
                    <div>
                    You got {actVotes} out of {totalVotes}
                    </div>
                   </span>
                </div>

            </div>
        )
    };
}

export default ScoreCard;