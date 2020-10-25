import React  from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom'
import UnAnsweredQuestion from "./UnAnsweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

class Question extends React.Component
{
    render()
    {
        const {IsAnswered} = this.props;
        if (typeof IsAnswered === 'undefined') {
            return (<div> </div>)
        }
        return (
            <div>
                {IsAnswered === "true" ? <AnsweredQuestion  /> : <UnAnsweredQuestion />}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props)
{

    console.log("Location path ", props);

    console.log("users path ", users);

    console.log("authed Users  ", authedUser);
    let answered = false;
    let qid  = props.match.params.id;
    let usersObj = Object.values(users);

    let selUser = usersObj.filter((user) => {
        return user.id === authedUser.id
    });
    if (selUser.length > 0) {
        console.log(" answers ", selUser[0].answers)
        let answerKeys = Object.keys(selUser[0].answers);
        answered = answerKeys.filter((answer) => {
            return answer === qid
        }).length > 0

    }

    console.log( " Answered or not  ", answered);
    return {
        users,
        IsAnswered: answered ? "true" : "false",
    }
}

export default  connect(mapStateToProps)(Question)