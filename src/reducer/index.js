import counterReducer from './counter'
import loggedReducer from './isLogged'
import authReducer from './auth/authReducer'
import productReducer from './product/productReducer'
import sliderReducer from './slider/sliderReducer'
import cartReducer from './cart/cartReducer'

import { combineReducers } from 'redux'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {  persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

// const allReducers = combineReducers({
//     counter: counterReducer,
//     isLogged: loggedReducer,
//     auth: persistReducer(persistConfig, authReducer),
//     product: persistReducer(persistConfig, productReducer),
//     slider: persistReducer(persistConfig, sliderReducer)

// })
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    auth:  authReducer,
    product: productReducer,
    slider: sliderReducer,
    cart: cartReducer

})

export default allReducers;