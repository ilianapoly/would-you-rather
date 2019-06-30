import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * PrivateRoute component ensures the route can only be accessed
 * by an authenticated user
 */
class PrivateRoute extends Component {

  render() {
    
    const { authedUser, component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={(props) => (
        authedUser !== null
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/Login',
              state: { from: props.location }
            }} />
      )} />
    );
  }

}

function mapStateToProps({ authedUser }) {
  
  return { authedUser };

}

export default connect(mapStateToProps)(PrivateRoute);