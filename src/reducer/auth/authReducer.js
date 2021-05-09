
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, RESTORE_TOKEN } from '../../actions/actionTypes'

function authReducer(state = {
    isFetching: false,
    isAuthenticated: false,
    errorMessage:null
}, action) {
    switch (action.type) {
        case RESTORE_TOKEN:
            return Object.assign({}, state, {
                isAuthenticated: action.data,
            })
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
                errorMessage: 'Giriş Başarılı',
                id_token: action.id_token,
                name: action.name
            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            })
        default:
            return state
    }
}


export default authReducer
