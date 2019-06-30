export const SET_LOADING_DATA = 'SET_LOADING_DATA'

export function setLoadingData (loading) {
    return {
        type: SET_LOADING_DATA,
        loading
    }
}