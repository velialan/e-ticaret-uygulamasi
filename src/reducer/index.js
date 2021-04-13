import counterReducer from './counter'
import loggedReducer from './isLogged'
import authReducer from './authReducer'

import {combineReducers} from 'redux'

const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    auth:authReducer
})

export default allReducers;