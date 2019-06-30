import React, { Component, Fragment } from 'react';
import { 
  Paper, 
  withStyles, 
  Card, 
  Typography 
} from '@material-ui/core'

const styles = ()=> ({
  root: {
    flexGrow: 2,
    margin: '16px auto',
    padding: 0,
  },
  paper: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

/**
 * NotFound component is displayed when a url cannot be found
 */
class NotFound extends Component {

  render() {

    const {classes} = this.props;

    return(
      <Fragment>
        <Paper className={classes.root}>
          <Card className={classes.paper} >
            <Typography variant="h1" style={{marginTop:20}}>
              404
            </Typography>
            <Typography variant="h5">
              Page not found :(
            </Typography>
              <div
                className={classes.media}>
                <img
                  src="/images/404_statue.png"
                  alt="404"
                  style={{
                    height:'30vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    marginTop: '20%'
                  }} />
              </div>
           </Card>
          </Paper>
      </Fragment>

    )
  };
}

export default (withStyles(styles)(NotFound));