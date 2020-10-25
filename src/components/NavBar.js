import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import authedUser from '../reducers/index'
import {NavLink, withRouter} from 'react-router-dom'

import  '../scss/style.scss';

import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Container,
    Card,
    Button
} from 'react-bootstrap'

class NavBar extends React.Component {


    onLogoutClicked =(e) => {

    }

    render()
    {
        const {pathname} = this.props.location;
        let { authedUser } = this.props
        //console.log(" pathname ", pathname);
        //console.log(" props ", this.props);

        console.log(" Logged in ",this.props.loggedIn);
        return(
            <div className="container">
                <NavLink className ="navbar-brand" to="/"> Would you rather </NavLink>
                <div className='navbar-collapse' id="navbarNavAltMarkup">
                    <NavLink exact to='/'  activeClassName={pathname==='/'? 'active':''} classname="nav-item nav-link">
                        Home
                    </NavLink>
                    <NavLink to='/add' activeClassName={pathname === '/add'? 'active':''} classname="nav-item nav-link">
                        Add Question
                    </NavLink>
                    <NavLink to='/leader' activeClassName={pathname === '/leader'? 'active':''} classname = "nav-item nav-link">
                        LeaderBoard
                    </NavLink>

                {this.props.loggedIn === true ?
                    (
                        <div className="navbar-brand navbar-right d-flex align-items-center">
                            <span style={{ fontSize: 16 + 'px' }}>Hello, {authedUser.name}!</span>
                            <img src={authedUser.avatarPath} width="34" height="34" className="d-inline-block align-top rounded mr-2 ml-2" alt="User Avatar" />
                           <NavLink to= "/logout"><button>Logout</button></NavLink>
                        </div>
                    ) :
                    (
                        <div>
                            {pathname === "/login" ? null :
                                <NavLink to="/login">
                                    <button> Login</button>
                                </NavLink>
                            }
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}


function mapStateToProps({authedUser})
{
    return {
        authedUser,
        loggedIn : ( authedUser !== null  && authedUser.loggedIn !== false && authedUser.id !== null &&
          typeof authedUser.id !== 'undefined')
    };
}

export default withRouter(connect(mapStateToProps)(NavBar));