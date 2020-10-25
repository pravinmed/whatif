import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import authedUser from '../reducers/index'
import {NavLink, withRouter} from 'react-router-dom'
import users from "../reducers/users";
import {DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Button} from "@material-ui/core";
import {logoutUser} from '../actions/authedUser'

class Logout extends React.Component
{
    constructor() {
        super();
    }

    componentDidMount()
    {
        const {id} = this.props.authedUser
        this.props.dispatch(logoutUser(id));

    }
    render() {
       return (
           <div>
                <h4> User has  been logged out</h4>
           </div>
       )
    }

}

function mapStateToProps({authedUser})
{
    console.log(" Logout for ", authedUser)

    return (
        {authedUser}
    )
}


export default  withRouter(connect(mapStateToProps)(Logout))