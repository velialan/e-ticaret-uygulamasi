
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, RESTORE_TOKEN, FORGOT_REQUEST, FORGOT_SUCCESS, FORGOT_FAILURE } from '../../actions/actionTypes'

function authReducer(state = {
    isFetching: false,
    isAuthenticated: false,
    errorMessage: '',
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
                isAuthenticated: false,
                id_token: null
            })
        default:
            return state
    }
}

function forgotReducer(state = {
    isFetching: false,
    Message: ''
}, action) {
    switch (action.type) {

        case FORGOT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case FORGOT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                Message: action.message,
            })
        case FORGOT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                Message: action.message
            })
        default:
            return state
    }
}

export { authReducer, forgotReducer }
