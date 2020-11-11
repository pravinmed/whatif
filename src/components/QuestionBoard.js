import React ,{Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {Link, Redirect, withRouter} from 'react-router-dom'
import  '../scss/style.scss';
import {handleNewQuestion, handleVote} from "../actions/shared";



class QuestionBoard extends  React.Component
{
    state ={
        option1: '',
        option2:'',
        toHome : false
    }

    handleChange1 = (e) => {
        const text = e.target.value

        this.setState( ()=> ({
            ...this.state,
            option1 : text,
        }))
    }

    handleChange2 = (e) => {
        const text = e.target.value

        this.setState( ()=> ({
            ...this.state,
            option2 : text,
        }))
    }


    onButtonClick =(evt, idd) => {
        const {id} = this.props;
        console.log(" Button click ", evt.target);
        console.log(" Button click ID  ", id);

        this.props.dispatch(handleNewQuestion(this.state.option1, this.state.option2))
        this.setState(() =>({
           option1 : '',
           option2 : '',
           toHome : true
        }))
        //this.props.history.push(`/questions/${qid}`)
    }


    render()
    {
        const {questions, authedUser, userInfo, id} = this.props;

        console.log(" User Info in render is ", userInfo)
        if (userInfo === null || userInfo === undefined) {
            return (
                <Redirect to="/home" />
            )
        }
        const {option1, option2, toHome} = this.state;
        if (toHome === true) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div>
                <h4> Answered Questions</h4>
                <div className='grid-container'>
                    <div className="item1">
                        <h4>Create new Question </h4>
                        <p>Complete the question</p>
                    </div>
                    <div className="item2">
                        <img src={userInfo.avatarURL} height="300" width ="150" />
                    </div>
                    <div className="item3">
                        <div>
                            <textarea rows="2" cols="100" placeholder="What if... option1" onChange={this.handleChange1}>{option1}</textarea>
                        </div>
                        <div> OR </div>
                        <div >
                           <textarea rows="2" cols="100" placeholder="What if... option2" onChange={this.handleChange2}>{option2}</textarea>
                        </div>
                    </div>
                    <div className="item5">
                        <button className="button" style={ {height:100, with:275}} onClick={this.onButtonClick} >Submit </button>
                    </div>

                </div>
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
        userInfo : userInfo !== null ? userInfo[0] : null,
        id : id,
    }
}

export default  withRouter(connect(mapStateToProps)(QuestionBoard))