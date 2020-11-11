import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import authedUser from '../reducers/index'
import {NavLink, Redirect, withRouter} from 'react-router-dom'
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

class Login extends React.Component
{
    constructor() {
        super();

    }

    state = {
        selectedUser : '',
        shouldRedirect : false
    }

    onUserChanged =(event) => {
        console.log(event.target.value);
        const val = event.target.value;
        this.setState((prevState) =>
            ({
                selectedUser : val,
            })
        )
    }

    onUserClicked = (e) => {
        const {selectedUser} = this.state;
        console.log("User Clicked ",selectedUser);
        console.log(" User name " ,this.props.users[selectedUser].name);

        this.props.dispatch(setLoginAuthedUser(selectedUser,this.props.users[selectedUser].name));
        this.setState((prevState)=> ({
          shouldRedirect : true
        }))
    }

    render()
    {
        const {loading} = this.props
        console.log(" Location ", this.props.location);
        const {users} = this.props;
        let retPath = "/";
        if (this.props.location === '/login' || this.props.location === '/logout'){

        }
        if (this.state.shouldRedirect === true) {
           return  <Redirect to='/home' />
        }
        return (
            <div >
                <br>
                </br>
                <div>
                <div className="box box2">
                <h3 className='text-center'> Please Login here
                </h3>
                {loading === true ? null :
                    (
                    <Fragment>
                        <div className='row justify-content-center'>
                            <InputLabel htmlFor="name">User Name</InputLabel>
                            <Select  autoWidth={300} value={this.state.selectedUser} onChange={this.onUserChanged} >
                                <option aria-label="None" style={{width : 200}} value="None" />
                            {

                                Object.values(users).map((user) => (
                                    <option key={user.id} value={user.id} style={{width : 200, cursor : 'pointer'}}>
                                        {user.name}
                                    </option>
                                ))
                            }
                            </Select>
                        </div>
                        <br>
                        </br>

                        <div>
                           <Button className="loginCard"  onClick={this.onUserClicked}>Sign In</Button>
                        </div>
                    </Fragment>
                    )
                }
                 </div>
                </div>

                    <div className="box box3">
                    </div>

            </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users})
{
    return {
        users,
        loading : users.loading === null
    }
}

export default  withRouter(connect(mapStateToProps)(Login))