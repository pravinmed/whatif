import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import authedUser from '../reducers/index'
import {NavLink, Redirect, withRouter, Link} from 'react-router-dom'
import users from "../reducers/users";
import {DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Button} from "@material-ui/core";
import {setLoginAuthedUser} from '../actions/authedUser'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {AppBar} from "@material-ui/core";
import TabPanel from '@material-ui/core/TablePagination'

import Paper from '@material-ui/core/Paper'
import Jstl from 'lodash'

class Home extends React.Component
{

    state = {
        answered : false,
        unanswered : false
    }

    OnHandleAnswered = (e) =>{
        console.log(" Changed Answered ",e);
        this.setState({
            answered : true,
            unanswered : false
        })
    }

    OnHandleUnAnswered = (e) =>{
        console.log(" Changed tab ",e);
        this.setState({
            answered : false,
            unanswered : true
        })
    }

    GetAvatar = (authorId) => {
       let userVal =  Object.values(this.props.users);
       let user = userVal.filter((user)=> (
           user.id === authorId
       ))
        console.log(" URL " ,user[0])
      return user[0].avatarURL
    }

    render() {
        let value = [ "Answered" , "UnAnswered"]
        let {answered} = this.state;
        let {unanswered} = this.state;
        console.log(" Answered ", answered)
        console.log(" Un Answered ", unanswered)

        const {questions} =  this.props;
        const {authedUser} = this.props;
        const {users} = this.props;
        if (authedUser.id === null || typeof authedUser.id === 'undefined'){
            return (<div></div>)
        }
        let questionKeys = Object.keys(questions);
        let usersObj = Object.values(users);
        let selUser = usersObj.filter((user) => {
              return user.id === authedUser.id
        });
        let selectedUser = selUser[0];

        // Get all  the answers from the user
        let answeredKeys = Object.keys(selectedUser['answers']);
        let unAnsweredKeys = Jstl.difference(questionKeys, answeredKeys);

        let answeredList =   Jstl.pick(questions, answeredKeys);
        let unansweredList = Jstl.pick(questions, unAnsweredKeys)

        let displayQuestions = this.state.answered? answeredList : unansweredList

        let sortedQuestions = Object.values(displayQuestions).sort((a,b)=> a.timestamp - b.timestamp);

        console.log("users " ,sortedQuestions);

        //questions.map
        return (
            <div>
                Home
                <nav className="navbar-expand-lg navbar-light bg-light">
                    <ul className="pagination pagination-lg justify-content-center">
                           <Button value="UnAnswered" onClick={this.OnHandleUnAnswered}>UnAnswered</Button>
                            <Button value="Answered" onClick={this.OnHandleAnswered}>Answered</Button>
                    </ul>
                </nav>
                <br></br>

                <div>
                    {sortedQuestions.map(question => (
                        <Link to={`/questions/${question.id}`} className="questionBox" key = {question.id}>
                            <div>{question.author} asks ...</div>
                            <br></br>
                            <div className="row text-center border rounded">
                                Would you rather

                            </div>
                            <div className="row bg-primary">
                                <div className="option col-5 p-2">
                                {question.option1.text}
                                </div>
                            </div>
                            <div>
                                    OR
                            </div>
                            <div className="row bg-primary">
                                <div className="option col-5 p-2">
                                    {question.option2.text}
                                </div>
                            </div>
                            <div>
                                <img src={this.GetAvatar(question.author)} width="60" height="60" />
                              </div>
                            <br></br>
                            <br></br>
                        </Link>
                    ))}
                </div>
               </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users})
{
    return {
        authedUser,
        questions,
        users
    }

}

export default connect(mapStateToProps)(Home)