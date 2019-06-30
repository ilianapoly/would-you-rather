import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import {connect} from 'react-redux';
import LoadingBar from "react-redux-loading";
import CssBaseline from '@material-ui/core/CssBaseline'
import { handleInitialData } from './actions/shared';
import Login from './components/Login';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewQuestions from './components/NewQuestions';
import Leaderboard from './components/Leaderboard';
import Question from './components/Question';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render () {
    
    return (
      <Router>
        <Fragment>
          <CssBaseline>
            <LoadingBar/>
            {/* Redirect to Login if user not authenticated  */}
            {!this.props.authedUser && (
              <Redirect to='/Login' />
            )}
            {/* Show Nav Bar if user authenticated */}
            {this.props.authedUser && (
              <NavBar />
            )}
            <Switch>
              <PrivateRoute path='/' exact component={Home} />
              <Route path='/Login' exact component={Login} />
              <PrivateRoute path='/add' exact component={NewQuestions} />
              <PrivateRoute path='/Leaderboard' exact component={Leaderboard} />
              <PrivateRoute path='/questions/:question_id' exact component={Question} />
              <Route path='/NotFound' exact component={NotFound} />
            </Switch>
          </CssBaseline>
        </Fragment>
      </Router>
    );
  }
}

function mapsStateToProps({authedUser}){
  return { authedUser }
}

export default connect(mapsStateToProps)(App);