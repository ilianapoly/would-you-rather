import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { 
  Container,
  Paper, 
  withStyles
} from '@material-ui/core/'
import QuestionTabs from "./QuestionTabs";

const styles = () => ({
  root: {
    marginTop:'16px',
    flexGrow: 2,
    margin: `${1}px auto`,
  },
  paper: {
    display: 'flex',
    marginBottom: '8px'
  }
});

/**
 * Home page component, displays questions tab
 */
class Home extends Component {

  render() {
    
    const {classes, authedUser, loadingData} = this.props;
    
    /* Redirect to Login if user not authenticated */
    if (!authedUser) {
      return <Redirect to="/Login" />
    }

    /* If data loading then show busy indicator */
    if (loadingData === true) {
      return (
        <Container maxWidth="sm" className={classes.root}>
            <Paper  className={classes.paper}>
              <div style={{margin:'24px'}}>
                <h3>Loading, please wait...</h3>
              </div>
            </Paper>
        </Container>
      )
    }

    return (
      <Fragment>
        <Container maxWidth="sm"  className={classes.root}>
          <div className={classes.root}>
            <QuestionTabs/>
          </div>
        </Container>
      </Fragment>
    )
  }

}

function mapStateToProps({ loadingData, authedUser }) {

  return { loadingData, authedUser }
}

export default connect(mapStateToProps)(withStyles(styles)(Home));