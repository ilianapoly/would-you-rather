import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import loadingData from './loadingData';

export default combineReducers({
    authedUser,
    users,
    questions,
    loadingData,
    loadingBar: loadingBarReducer
})