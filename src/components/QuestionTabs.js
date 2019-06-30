import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
  Tabs, 
  Tab, 
  Paper, 
  Container 
} from '@material-ui/core'
import QuestionPreview from "./QuestionPreview";
import {withStyles} from "@material-ui/styles";

const styles = () => ({
  root: {
    marginTop:'16px',
    flexGrow: 2,
    margin: `${1}px auto`,
  },
  paper: {
    display: 'flex',
    marginBottom: '8px'
  },
  tabs:{
    marginTop:'8px',
    backgroundColor:'#fff0'
  }
})

/**
 * QuestionTabs component provides a list of both
 * answered and unanswered questions
 */
class QuestionTabs extends Component {

  state = {
    selectedTab: 0,
  }

  /**
   * Treack the selected tab
   */
  handleTabChange = (event, newValue) => {
    this.setState({
      selectedTab: newValue
    });
  }

  render() {
    
    const { classes, answeredQuestionsIds, unansweredQuestionsIds, questions } = this.props
    
    return (

      <Fragment>
        <Container maxWidth="sm" className={classes.root}>
          <Paper  className={classes.paper}>
            <Tabs
              className={classes.tabs}
              value={this.state.selectedTab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              variant="fullWidth">
              <Tab label="Unanswered" />
              <Tab label="Answered" />
            </Tabs>
          </Paper>
          {this.state.selectedTab === 0 &&
            <Fragment>
              {unansweredQuestionsIds.map( unansweredQuestionsId => (
                <QuestionPreview key={questions[unansweredQuestionsId].id} question={questions[unansweredQuestionsId]}/>
              ))}
            </Fragment>
          }
          {this.state.selectedTab === 1 &&
            <Fragment>
              {answeredQuestionsIds.map( answeredQuestionsId => (
                <QuestionPreview key={questions[answeredQuestionsId].id} question={questions[answeredQuestionsId]}/>
              ))}
            </Fragment>
          }
          </Container>
        </Fragment>
    )
  }
}

function mapStateToProps({ users, authedUser, questions }) {

  const user = users[authedUser]
  const unansweredId = Object.keys(questions).filter( question => !Object.keys(user.answers).includes(question))
  const answeredId = Object.keys(user.answers)
  
  return {
    unansweredQuestionsIds : unansweredId.sort( (a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionsIds: answeredId.sort( (a, b) => questions[b].timestamp - questions[a].timestamp),
    questions
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionTabs));