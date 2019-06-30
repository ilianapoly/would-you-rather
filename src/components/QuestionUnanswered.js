import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { Redirect, Link } from 'react-router-dom'
import {
  Paper,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Grid,
  withStyles,
  Avatar,
  Container
} from '@material-ui/core'
import { saveQuestionAnswer } from "../utils/api";
import { refreshData } from "../actions/shared";

const styles = ()=> ({
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
  toolbarButtons: {
    marginTop:'auto',
    alignItems: 'end',
    marginLeft: "auto",
    marginRight: '16px',
    margin:'auto 16px 16px auto',
  },
  column: {
    flexBasis: '33.33%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridRow:{
    justifyContent: 'center',
    padding:'8px',
    display:'flex',
    background: `linear-gradient(45deg, #9797ff, #c7dbff, #affffa)`
  },
  gridLeft: {
    display:'flex',
    justifyContent: 'space-evenly',
    padding: '16px 0 16px 0',

  },
  gridRight: {
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    padding:'16px',
    wordBreak: 'break-word'
  },
  bigAvatar: {
    width:'80px',
    height:'80px',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.2)',
    alignSelf: 'center',
  },
  gridItem:{
    display:''
  },

});

/**
 * QuestionUnanswered component allows user to select an option and submit it.
 * On option submittion the user is redirected to the Question component.
 */
class QuestionUnanswered extends Component {

  state = {
    selectedOption: "optionOne", /* Tracks selection option */
    toPoll: false, /* Flag tracks redirection to Question component */
    answerSubmitted: false /*Tracks if answer submitted */
  }

  /* Tracks selected option */
  handleChangeRadio = (event, newValue) =>{
    this.setState({ 
      selectedOption: newValue
    });
  }

  /**
   * Submit selected option, refresh data on successfull submittion 
   * and set flag to redirect to Question component
   */
  handleSubmit = (event) => {

    event.preventDefault();

    this.setState({ 
      answerSubmitted: true
    });

    const info = {
      authedUser: this.props.user.id, 
      qid: this.props.questionId, 
      answer: this.state.selectedOption
    };

    saveQuestionAnswer(info).then(() => {
      this.props.dispatch(refreshData());
      this.setState({ 
        toPoll: true
      });
    });
  }

  render() {

    const {classes, questions, users, questionId} = this.props;
    const question = questions[questionId];
    const user = users[question.author]

    /* Redirect to Question component */
    if (this.state.toPoll === true) {
      return <Redirect to={`/questions/:${questionId}`} />
    }
    
    /* Show please wait while question is being submitted */
    if (this.state.answerSubmitted === true) {
      return (
          <Fragment>
            <Container maxWidth="sm" className={classes.root}>
                <Paper  className={classes.paper}>
                  <div style={{margin:'24px'}}>
                    <h3>Answer submitted, please wait...</h3>
                  </div>
                </Paper>
            </Container>
          </Fragment>
      )  
    }

    return(
      <Fragment>
        <Container maxWidth="sm" style={{padding:0}}>
          <Paper className={classes.root} >
            <Grid container className={classes.gridRow}>
              <Typography variant="subtitle2" >
                {user.name} asks :
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={4} className={classes.gridLeft}>
                <Avatar className={classes.bigAvatar}  src={user.avatarURL}/>
              </Grid>
              <Grid item xs={8} className={classes.gridRight}>
                <FormControl component="fieldset" >
                  <FormLabel component="legend" style={{marginBottom: '8px'}}>
                    Would you rather? :
                  </FormLabel>
                  <RadioGroup name="Would-you-rather" value={this.state.selectedOption} onChange={this.handleChangeRadio} outlined={`true`}>
                    <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio variant="outlined" />} label={question.optionTwo.text}  />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container direction="row" justify="flex-end" alignItems="center">
                <Button variant="outlined" size="small" color="primary" className={classes.toolbarButtons} to={`/`} component={Link}>
                  Back
                </Button>
                <Button variant="outlined" size="small" color="primary" className={classes.toolbarButtons} onClick={this.handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Fragment>
    )
  };
}

function mapStateToProps({authedUser, questions, users} ){
  return{
    user: users[authedUser],
    questions,
    users
  }
}
export default connect(mapStateToProps)(withStyles(styles)(QuestionUnanswered));
