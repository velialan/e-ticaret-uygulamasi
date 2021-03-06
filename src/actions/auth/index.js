import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, LOGOUT_SUCCESS, RESTORE_TOKEN, FORGOT_REQUEST, FORGOT_SUCCESS, FORGOT_FAILURE } from '../actionTypes'
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
        isAuthenticated: false,
        id_token: null
    }
}


export function logoutUser(param) {

    const config = {
        headers: {
            'Accept': 'application/json',
            "Authorization": `Bearer ${param.token}`

        }
    };
    return dispatch => {
        dispatch(requestLogout())
        return axios.get(`${API_URL}/customer/logout?token=true`, config)
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureGETUSER("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    dispatch(receiveLogout())
                    removeValue();
                }
            }).catch(err => {
                console.log("Error: ", err.response)
                dispatch(receiveLogout())
                removeValue();
            })
    }
}

async function removeValue() {
    try {
        await AsyncStorage.clear();
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
                    console.log(response.data)
                    AsyncStorage.setItem('id_token', response.data.token).then(() => {
                        dispatch(receiveLogin(response.data))
                    })
                }
            }).catch(err => {
                if (err.response.status == 401) {
                    AsyncStorage.clear();
                    dispatch(loginError("Email veya ??ifre Hatal??"))
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
export function GETUser(param) {

    const config = {
        headers: {
            "Authorization": `Bearer ${param.token}`,

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



function requestForgot() {
    return {
        type: FORGOT_REQUEST,
        isFetching: true,

    }
}

function receiveForgot(message) {
    return {
        type: FORGOT_SUCCESS,
        isFetching: false,
        message
    }
}

function forgotError(message) {
    return {
        type: FORGOT_FAILURE,
        isFetching: false,
        message
    }
}
//FORGOT PASSWORD
export function fotgotPassword(email) {
    return dispatch => {
        dispatch(requestForgot())
        return axios.post(`${API_URL}/customer/forgot-password`, email)
            .then(response => {
                if (response.status == 200) {

                    if (response?.data?.message) {
                        dispatch(receiveForgot('Parola s??f??rlama ba??lant??n??z e-posta adresinize g??nderildi!'))

                    } else {
                        dispatch(receiveForgot('Bu e-posta adresine sahip bir kullan??c?? bulam??yoruz.'))

                    }
                }
            }).catch(err => {
                if (err.response.status == 401) {

                    dispatch(forgotError("Bu e-posta adresine sahip bir kullan??c?? bulam??yoruz."))
                    //return Promise.reject("request failed")
                }
            })
    }
}
