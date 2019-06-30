import { showLoading, hideLoading} from 'react-redux-loading'
import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { setLoadingData } from "./loadingData";

export function handleInitialData(){
    return (dispatch) =>{
        dispatch(showLoading())
        dispatch(setLoadingData(true))
        return getInitialData().then(({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(''))
            dispatch(hideLoading())
            dispatch(setLoadingData(false))
        })
    }
}

export function refreshData(){
    return (dispatch) =>{
        dispatch(showLoading())
        dispatch(setLoadingData(true))
        return getInitialData().then(({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
            dispatch(setLoadingData(false))
        })
    }
}