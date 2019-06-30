import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { 
  Container, 
  withStyles, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Typography 
} from '@material-ui/core';
import { saveQuestion } from "../utils/api";
import { refreshData } from "../actions/shared";

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
    content: {
        flex: '1 0 auto',
    },
    submitButtons: {
        marginTop:'8px',
        marginLeft: "auto",
        marginRight: '8px',
        alignItems: 'end'
    },
    column: {
        flexBasis: '33.33%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 1,
        marginRight: 1,
    }
});

/**
 * NewQuestions component allows user to create and submit a new question.
 * On submittion user is redirected to Home component
 */
class NewQuestions extends Component {

  state = {
    questionOne: '', /* Track question One */
    questionTwo: '', /* Track question Two */
    toHome: false, /* Track flag that redirects us to home page */
    questionSubmitted: false /* Track whether question has been submitted */
  }

  /**
   * Track question one text
   */
  handleQuestion1Change = (event) => {
      this.setState({ 
          questionOne: event.target.value
      });
  };

  /**
   * Track question two text
   */
  handleQuestion2Change = (event) => {
      this.setState({ 
          questionTwo: event.target.value
      });
  };

  /**
   * On question submittion save question
   */
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ 
      questionSubmitted: true
    });

    const question  = {
        author: this.props.authedUser,
        optionOneText: this.state.questionOne,
        optionTwoText: this.state.questionTwo
    };

    saveQuestion(question).then(() => {
        this.props.dispatch(refreshData())
        this.setState({ 
          toHome: true
        })
    });
  }
  
  render() {

      const {classes, questionOne, questionTwo} = this.props;
      
      /* Redirect to home page once question submitted */
      if (this.state.toHome === true) {
        return <Redirect to='/' />
      }

      /* If question has been submitted the prompt creating message */
      if (this.state.questionSubmitted === true) {
        return (
            <Fragment>
              <Container maxWidth="sm" className={classes.root}>
                  <Paper  className={classes.paper}>
                    <div style={{margin:'24px'}}>
                      <h3>Creating question, please wait...</h3>
                    </div>
                  </Paper>
              </Container>
            </Fragment>
        )  
      }

      return (
          <Fragment>
            <Container maxWidth="sm" className={classes.root}>
              <div className={classes.root}>
                <Paper  className={classes.paper}>
                  <div style={{margin:'24px'}}>
                    <form className={classes.container} noValidate autoComplete="off">
                      <Typography variant="h6" style={{marginBottom:'16px'}}>
                        Create New Question
                      </Typography>
                      <Grid container>
                        <Grid item>
                          <Typography variant={"subtitle2"}>Would you rather :</Typography>
                        </Grid>
                      </Grid>
                      <TextField
                        id="optionOne"
                        required
                        label="Option 1"
                        style={{ margin: 8 }}
                        maxLength="2"
                        rowsMax="3"
                        placeholder="Would you rather"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        inputProps={{
                          maxLength: 140
                        }}
                        value={questionOne}
                        onChange={this.handleQuestion1Change}
                      />
                      Or:
                      <TextField
                        id="outlined-full-width"
                        label="Option 2"
                        required
                        style={{ margin: 8 }}
                        maxLength="2"
                        rowsMax="3"
                        placeholder="Or"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        inputProps={{
                          maxLength: 140
                        }}
                        value={questionTwo}
                        onChange={this.handleQuestion2Change}
                      />
                      <Button variant="outlined" size="small" color="primary" className={classes.submitButtons} 
                              onClick={this.handleSubmit}
                              disabled={(this.state.questionOne.trim() === "") || (this.state.questionTwo.trim() === "") || (this.state.questionSubmitted === true)}  >
                        Create
                      </Button>
                    </form>
                  </div>
                </Paper>
              </div>
              </Container>
          </Fragment>
      )
  }
}

function mapStateToProps ({ authedUser, questionOne, questionTwo}) {

    return { authedUser, questionOne, questionTwo }
}

export default connect(mapStateToProps)(withStyles(styles)(NewQuestions));