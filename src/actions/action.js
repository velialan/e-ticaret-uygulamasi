import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT_REQUEST,LOGOUT_FAILURE,LOGOUT_SUCCESS } from './actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}


export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout())
        AsyncStorage.removeItem('id_token')
        dispatch(receiveLogout())
    }
}


function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    console.log(user.token)
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.token
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}


export function loginUser(creds) {

    return dispatch => {
        dispatch(requestLogin(creds))
        return axios.post('http://yazilimisleri.com/api/customer/login?token=true', creds)
            .then( response => {
                console.log(response)
                if (response.status != 200) {
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else if (response.status == 200) {

                    AsyncStorage.setItem('id_token', response.data.token)
                    dispatch(receiveLogin(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}