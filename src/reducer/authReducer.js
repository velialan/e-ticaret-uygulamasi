
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../actions/actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage';




const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('id_token')
      if(value !== null) {
        return true
      }
    } catch(e) {
        return false
    }
  }
  


function authReducer(state = {
    isFetching: false,
    isAuthenticated:  getData()
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
                id_token:action.id_token
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            })
        default:
            return state
    }
}


export default authReducer
