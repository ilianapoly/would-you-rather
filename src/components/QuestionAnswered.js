import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import {
  Paper,
  Card,
  Button,
  FormControl,
  FormLabel,
  Typography,
  Grid,
  Divider,
  withStyles,
  Avatar,
  Container
} from '@material-ui/core'

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
 * QuestionAnswered component displays the history of the questions as well
 * as the option that the current user selected
 */
class QuestionAnswered extends Component {

  state = {
    value:''
  }

  render() {

    const {classes, questions, users, questionId, user } = this.props;
    const question = questions[questionId]
    const questionUser = users[question.author]
    const optionOne = question.optionOne.votes.length
    const optionTwo = question.optionTwo.votes.length
    const voteTotal = optionOne + optionTwo
 
    /* Create style for option one  */  
    const answeredOption = user.answers[questionId]
    let optionOneBorderStyle = '1px solid #ced4da'
    let optionOneElevation = 0
    if(answeredOption === "optionOne"){
      optionOneBorderStyle = '4px solid #43a047'
      optionOneElevation = 5
    }

    /* Create style for option two  */  
    let optionTwoBorderStyle = '1px solid #ced4da'
    let optionTwoElevation = 0
    if(answeredOption === "optionTwo"){
      optionTwoBorderStyle = '4px solid #43a047'
      optionTwoElevation = 5
    }

    return(
      <Fragment>
        <Container maxWidth="sm" style={{padding:0}}>
          <Paper className={classes.root} >
            <Grid container className={classes.gridRow}>
              <Typography variant="subtitle2" >
                {questionUser.name} asked :
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={4} className={classes.gridLeft}>
                <Avatar className={classes.bigAvatar}  src={questionUser.avatarURL}/>
              </Grid>
              <Grid item xs={8} className={classes.gridRight}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" style={{marginBottom:'8px'}}>Statistics</FormLabel>
  
                    <Card elevation={optionOneElevation} style={{border: `${optionOneBorderStyle}`, borderRadius: 4,padding: '10px 12px', margin:'8px 0 8px 0 '}}>
                      <Typography style={{fontSize:'16px'}}>
                        {question.optionOne.text}
                      </Typography>
                      <Divider/>
                      <Typography style={{fontSize:'12px'}}>
                        Percent of Votes : {`${(optionOne*100/voteTotal).toFixed(0)} %`}
                      </Typography>
                      <Divider/>
                      <Typography style={{fontSize:'12px'}}>
                        Number of Votes : {`${optionOne} / ${voteTotal}`}
                      </Typography>
                    </Card>
                    <Card elevation={optionTwoElevation} style={{border: `${optionTwoBorderStyle}`, borderRadius: 4,padding: '10px 12px', margin:'8px 0 8px 0 '}}>
                      <Typography style={{fontSize:'16px'}}>
                        {question.optionTwo.text}
                      </Typography>
                      <Divider/>
                      <Typography style={{fontSize:'12px'}}>
                        Percent of Votes : {`${(optionTwo*100/voteTotal).toFixed(0)} %`}
                      </Typography>
                      <Divider/>
                      <Typography style={{fontSize:'12px'}}>
                        Number of Votes : {`${optionTwo} / ${voteTotal}`}
                      </Typography>
                    </Card>
                </FormControl>
              </Grid>
              <Button variant="outlined" size="small" color="primary" className={classes.toolbarButtons} to={`/`} component={Link}>
                Back
              </Button>
            </Grid>
          </Paper>
        </Container>
      </Fragment>
    )
  };
}

function mapStateToProps({authedUser, questions, users,} ){

  return { user: users[authedUser], questions, users }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionAnswered));
