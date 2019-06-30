import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, } from 'react-router-dom'
import { withRouter } from "react-router";
import { 
    withStyles, 
    Paper, 
    Tabs, 
    Tab, 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Avatar, 
    Grid
} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { setAuthedUser } from "../actions/authedUser";

const styles = () => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#ffffff',
    },
    title: {
        flexGrow: 1,
    },
  });

/**
 * NavBar component provides user with navigation tabs
 */
class NavBar extends Component {
    
    state = {
        selectedTab: 0
    };
    
    /**
     * On logout clean authenticated user
     */
    handleLogout = () => {
        this.props.dispatch(setAuthedUser(''));
    }
    
    /**
     * Track tab selection change
     */
    tabChanged = (event, newValue) =>{
        this.setState({ 
            selectedTab: newValue
        });
    }

    render() {

        const {classes, user} = this.props;
        const {pathname} = this.props.location;
        let selectedTab = this.state.selectedTab;

        // Ensure correct tab is selected on render
        // Not the most elegant solution, but gets the job done
        if(pathname === "/"){
            selectedTab = 0
        }else if(pathname === "/add"){
            selectedTab = 1
        }if(pathname === "/leaderboard"){
            selectedTab = 2
        }

        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Would You Rather
                        </Typography>
                        <Avatar src={user.avatarURL}/>
                            <Button color="inherit" onClick={this.handleLogout} to="/" component={Link}>
                                <Grid container spacing={2} justify={"flex-end"}>
                                    Logout
                                    <Typography style={{flexDirection:'row',justifyContent:'flex-end', marginLeft:'4px', fontWeight:'500', fontSize:'0.875rem', alignSelf:'center'}}>{user.name}</Typography>
                                </Grid>
                            </Button>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.root}>
                    <Tabs value={selectedTab} onChange={this.tabChanged} indicatorColor="primary" textColor="primary" centered>
                        <Tab label="Home" icon={<PlaylistPlayIcon />} component={Link} to="/"/>
                        <Tab label="New" icon={<PlaylistAddIcon />} component={Link} to="/add" />
                        <Tab label="Leaderboard" icon={<AssessmentIcon />} component={Link} to="/leaderboard"/>
                    </Tabs>
                </Paper>
            </Fragment>
        )
    }
}

function mapStateToProps ({ authedUser, users}) {

  return { user: users[authedUser] }
}

export default connect(mapStateToProps)(withStyles(styles)(withRouter(NavBar)));