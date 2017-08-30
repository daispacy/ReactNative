import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { cancelRequest, authUserWithServer } from './api'

export function getData() {
    return {
        type: FETCHING_DATA
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data,
        error: false
    }
}

export function getDataFailure() {
    console.log('call ca get data failure la sao');
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export function authUser(email, password) {
    return (dispatch) => {
        dispatch(getData())
        authUserWithServer(email, password)
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => { if (err) console.log('err:', err.TypeError); dispatch(getDataFailure()) })
    }
}