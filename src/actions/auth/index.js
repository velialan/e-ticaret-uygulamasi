import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, LOGOUT_SUCCESS, RESTORE_TOKEN } from '../actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_URL } from '../../config';

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
        removeValue();
        dispatch(receiveLogout())
    }
}

async function removeValue() {
    try {
        await AsyncStorage.removeItem('id_token')
    } catch (e) {
        // remove error
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
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.token,
        name: user.data.name,
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

function receiveRestore(creds) {
    return {
        type: RESTORE_TOKEN,
        data: creds
    }
}
//restoretoken
export function restoretoken(creds) {
    return dispatch => {
        dispatch(receiveRestore(creds))
    }
}

//LOGIN
export function loginUser(creds) {
    return dispatch => {
        dispatch(requestLogin(creds))
        return axios.post(`${API_URL}/customer/login?token=true`, creds)
            .then(response => {
                if (response.status == 200) {

                    AsyncStorage.setItem('id_token', response.data.token)
                    dispatch(receiveLogin(response.data))
                }
            }).catch(err => {
                if (err.response.status == 401) {

                    dispatch(loginError("Email veya şifre Hatalı"))
                    //return Promise.reject("request failed")
                }
            })
    }
}

function requestGETUSER() {
    return {
        type: GET_USER_REQUEST,
        isFetching: true,
    }
}

function receiveGETUSER(data) {
    return {
        type: GET_USER_SUCCESS,
        isFetching: false,
        data
    }
}

function failureGETUSER(message) {
    return {
        type: GET_USER_FAILURE,
        isFetching: false,
        message
    }
}

// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('id_token')
//         if (value !== null) {
//             return value
//         }
//     } catch (e) {
//         return false
//     }
// }

//GET USER
export function GETUser() {


    const config = {
        headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC95YXppbGltaXNsZXJpLmNvbVwvYXBpXC9jdXN0b21lclwvbG9naW4iLCJpYXQiOjE2MjA0Njk2NTUsImV4cCI6MTYyMDQ3MzI1NSwibmJmIjoxNjIwNDY5NjU1LCJqdGkiOiJBRmhaVDJsUGgyc2tVV1lKIiwic3ViIjoxLCJwcnYiOiI4ZmNhMDg4YWJhZTJmOWE4Zjg0YTVmMGJmNmE2NTI0NDkwNTViZTAwIn0.MWrbYNGn8XDG48xu9ZBOMA0vVJLz79NckEV4JReI7k8`,

        }
    };
    return dispatch => {
        dispatch(requestGETUSER())
        return axios.get(`${API_URL}/customer/get`, config)
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureGETUSER("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    // console.log(response)
                    dispatch(receiveGETUSER(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}