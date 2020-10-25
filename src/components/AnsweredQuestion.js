import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import  '../scss/style.scss';


class AnsweredQuestion extends  React.Component
{

    render()
    {
        const {questions, authedUser, qid} = this.props;
        console.log(" Authed user ", authedUser)
        return (
           <div>
            <h4> Answered Questions</h4>
            <div className='grid-container'>
                <div className="item1">
                    User {authedUser.name} asks,
                </div>
                <div className="item2">
                    Photo
                </div>
                <div className="item3">
                    Results
                </div>
                <div className="item5">
                    Card Display
                </div>
            </div>
           </div>
        )
    }
}


function mapStateToProps({authedUser,questions}, {match}){
    console.log(" Match", match)
    let id  = '';
    if (typeof match !== 'undefined') {
        id = match.params.id;
    }

    return {
        questions,
        authedUser,
        qid : id,
    }
}

export default  withRouter(connect(mapStateToProps)(AnsweredQuestion))