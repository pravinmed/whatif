import React,  { Component, Fragment } from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {handleInitialData} from '../actions/shared'
import { connect } from 'react-redux'
import  LoadingBar  from 'react-redux-loading';
import NavBar from './NavBar'
import Login from "./Login"
import Logout from "./Logout"
import Home from "./Home"
import Question from './Question'
import QuestionBoard from "./QuestionBoard";
import LeaderBoard from "./LeaderBoard";

let prefix = '/questions/';
class App extends Component {

  componentDidMount()
  {
    // Store has dispatch in it.
    console.log(" Props in App", this.props);
    console.log(" Initial Data loaded ");
    this.props.dispatch(handleInitialData());
  }

  render() {
    console.log("props QID  ", this.props.qid);
    const {loading, questions, qid} = this.props;
    return (
        <div>
            <LoadingBar />
            {loading === true ? null :
                (<Router>
                    <Fragment>

                      
                    <NavBar />
                      <Route path='/questions/:id' component={Question} />

                      <Switch>
                        <Route exact path = "/login" component ={Login} />
                        <Route exact path = "/logout" component ={Logout} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/add" component={QuestionBoard} />
                      <Route exact path="/home" component={Home} />
                      <Route exact path="/leader" component={LeaderBoard} />

                    </Switch>

                </Fragment>
         </Router>)}
        </div>
    )
  }
}


function mapStateToProps({authUser,questions,users}, {location}) {
  console.log("Location " ,location)
  return {
    loading: authUser === null,
    questions,
    users,
    qid: (location !== null &&  typeof location !== 'undefined')?
        location.pathname.substring(prefix.length) : "0"
  }
}

export default connect(mapStateToProps)(App)
