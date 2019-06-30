import { SET_LOADING_DATA } from '../actions/loadingData'

export default function loadingData (state = null, action){
    switch(action.type) {
        case SET_LOADING_DATA :
            return action.loading
        default:
            return state
    }
}