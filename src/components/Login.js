import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { 
    withStyles, 
    MenuItem, 
    FormControl, 
    Container, 
    Typography,
    TextField, 
    Button, 
    IconButton, 
    Card, 
    CardContent,
    Grid, 
    Avatar
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { setAuthedUser } from "../actions/authedUser";

const styles = () => ({
    root: {
        flexGrow:1,
        backgroundColor: '#fff0'
    },
    card:{
        marginTop: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formControl: {
        minWidth: '100%',
        padding: 16,

    },
    submit: {
        marginTop:16
    },
    bigAvatar: {
        margin: 10,
        width: 48,
        height: 48,
    },
})

/**
 * Login component allows user to login.
 * On Login user is redirect to Home component
 */
class Login extends Component {

    state = {
        user: '', /* Selected user */
        isLoginEnabled: false, /* enables/disabled login button */
        toHome: false /* flag to redirect to home page after login */
    }

    /**
     * On user selection track selected user
     * and enable login button 
     */
    handleUserChange = (event) => {
        this.setState({ 
            user: event.target.value,
            isLoginEnabled: true
         });
    }

    /**
     * On login save authenticated user and set flag to redirect to home page
     */
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.dispatch(setAuthedUser(this.state.user.id));
        
        this.setState({ 
            toHome: true
        });
    }

    render() {

        const {classes, users, loadingData} = this.props;
        const {from} = this.props.location.state || { from: { pathname: "/" } };
        
        /* Redirect to last attempted url after login */
        if (this.state.toHome === true) {
            return <Redirect to={from} />
        }

        return (
            <Fragment>
                <Container maxWidth="xs" xs={12} sm={6} className={classes.root} >
                    <Card className={classes.card} >
                        <CardContent >
                            <Typography className={classes.card} variant="h4">
                                Welcome
                            </Typography>
                            <Typography className={classes.card} variant="body1">
                                Would You Rather
                            </Typography>
                        </CardContent>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <IconButton style={{background:'linear-gradient(45deg, #9797ff, #c7dbff, #affffa)', borderRadius:'50%', padding:8, margin:16,}}>
                                <LockOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">Sign In</Typography>
                        </Grid>
                        <FormControl variant="outlined" className={classes.formControl} required >
                            <TextField
                                select
                                value={this.state.user}
                                label={loadingData === true
                                    ? "Retrieving Users..."
                                    : "User"}
                                disabled={loadingData}
                                onChange={this.handleUserChange}
                                helperText="Please select a user"
                                margin="normal"
                                variant="outlined"
                                required>
                                {users.map((user) => (
                                    <MenuItem
                                    key={user.id}
                                    value={user}>
                                        <Avatar
                                        className={classes.bigAvatar}
                                        src={user.avatarURL}/>
                                        {user.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={!this.state.isLoginEnabled}
                                    onClick={this.handleSubmit}
                                    className={classes.submit}>
                                    Sign In
                                </Button>
                        </FormControl>
                    </Card>
                </Container>
            </Fragment>
        );
    }
}

function mapStateToProps({users, loadingData}){

    return{
        users: Object.values(users),
        loadingData
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Login));
