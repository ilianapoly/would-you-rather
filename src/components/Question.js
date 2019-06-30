import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'
import { 
  Container,
  Paper, 
  withStyles
} from '@material-ui/core/'
import QuestionAnswered from "./QuestionAnswered";
import QuestionUnanswered from "./QuestionUnanswered";

const styles = ()=> ({
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
 * Question component displays either an answered or answered question 
 * dependent on whether the user has answered the question
 */
class Question extends Component {

  state = {
    value:''
  }

  render() {

    const { classes, questions, user, loadingData } = this.props;
    const { question_id } = this.props.match.params
    const questionId = question_id.replace(":", "");

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
    
    return(
      <Fragment>
        {
          !questions[questionId]
            ?  (<Redirect to='/NotFound' />)
            : /* Show question */ Object.keys(user.answers).includes(questionId)
              ? /*Answered View*/ <QuestionAnswered questionId={questionId} user={user}/>
              : /*Unanswered*/<QuestionUnanswered questionId={questionId} user={user} />
        }
      </Fragment>
    )
  };
}

function mapStateToProps({authedUser, questions, users, loadingData } ){

  return{ user: users[authedUser], questions, loadingData }
}
export default connect(mapStateToProps)(withStyles(styles)(Question));
