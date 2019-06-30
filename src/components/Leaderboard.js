import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
  withStyles, 
  Paper, 
  Typography, 
  Avatar, 
  Container, 
  GridList, 
  GridListTile,
  Table, 
  TableBody, 
  TableCell, 
  TableRow 
} from '@material-ui/core';

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
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  gridList: {
    width: '500px'
  }
});

/**
 * Leaderboard component display leadership board
 */
class Leaderboard extends Component {
  
  render() {
    
    const {classes, users} = this.props;

    return (
      <Fragment>
        <Container maxWidth="sm" className={classes.root}>
          <div className={classes.root}>
            <Paper  className={classes.paper}>
              <div style={{margin:'24px'}}>
                <form className={classes.container} noValidate autoComplete="off">
                  <Typography variant="h6" style={{marginBottom:'16px'}}>
                    Leaderboard
                  </Typography>
                  <GridList className={classes.gridList} cols={1}>
                    {
                      Object.values(users).map(user => (
                        <GridListTile key={user.id} cols={1}>
                            <Table>
                              <TableBody>
                                <TableRow>
                                  <TableCell align="left">
                                    <Avatar
                                      className={classes.imgPost}
                                      alt={user.name}
                                      src={user.avatarURL}/>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography variant='subtitle1' align='center'>{user.name}</Typography>
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell align='left'>Answered/Asked</TableCell>
                                  <TableCell align='center'>{Object.keys(user.answers).length} / {Object.keys(user.questions).length}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell align='left' >Total</TableCell>
                                  <TableCell align='center'>{Object.keys(user.questions).length + Object.keys(user.answers).length}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                        </GridListTile>
                      ))
                    }
                  </GridList>
                </form>
              </div>
            </Paper>
          </div>
          </Container>
      </Fragment>

    )
  }
}

function mapStateToProps ({ users }) {

  return {
    users: Object.values(users).sort((a, b) => (Object.keys(b.questions).length + Object.keys(b.answers).length) - 
      (Object.keys(a.questions).length + Object.keys(a.answers).length))
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard));
