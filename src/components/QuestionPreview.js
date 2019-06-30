import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import { 
  Paper, 
  Typography, 
  Grid, 
  Avatar, 
  Button,
  FormControl, 
  RadioGroup, 
  Container, 
  withStyles
} from '@material-ui/core'

const styles = ()=> ({
  root: {
    marginTop:'16px',
    flexGrow: 2,
    margin: `${1}px auto`,
  },
  toolbarButtons: {
    marginTop:'auto',
    alignItems: 'end',
    marginLeft: "auto",
    marginRight: '16px',
    margin:'auto 16px 16px auto',
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
    wordBreak: 'break-all'
  },
  bigAvatar: {
    width:'80px',
    height:'80px',
    boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.2)',
    alignSelf: 'center',
  }
});

/**
 * QuestionPreview component provides a short view of a selected question.
 * The user can use this component to navigate to a more detailed view through
 * the Question component
 */
class QuestionPreview extends Component {

  render() {
  
    const {classes, users, question } = this.props;
    const user = users[question.author];

    return(
          <Paper className={classes.root}>
            <Grid key={question.id} container className={classes.gridRow}  >
              <Typography variant="subtitle2" >
                {user.name} asks :
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={4} className={classes.gridLeft}>
                <Avatar className={classes.bigAvatar} alt={user.name} src={user.avatarURL} />
              </Grid>
              <Grid item xs={8} className={classes.gridRight}>
                <FormControl component="fieldset" >
                  <RadioGroup  >
                    <Container style={{border: '1px solid #ced4da', borderRadius: 4,padding: '10px 12px'}}>
                      <Typography variant={"subtitle2"} gutterBottom sytle={{paddingBottom:'8px'}}>Would you rather:</Typography>
                      <Typography variant={"body2"} gutterBottom  >{question.optionOne.text}</Typography>
                      <Typography variant={"body1"} gutterBottom >OR</Typography>
                      <Typography variant={"body2"}>{question.optionTwo.text}</Typography>
                    </Container>
                  </RadioGroup>

                </FormControl>
              </Grid>              
              <Button key={question.id} variant="outlined" size="small" color="primary" className={classes.toolbarButtons}
                to={`/questions/:${question.id}`}
                component={Link}> 
                view
              </Button>
            </Grid>
          </Paper>
    )
  };
}

function mapStateToProps({users}){
  
  return { users }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionPreview));