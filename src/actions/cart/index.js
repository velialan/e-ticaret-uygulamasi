import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE, } from '../actionTypes'
import axios from 'axios';
import { API_URL } from '../../config';

function requestADDCART() {
    return {
        type: ADD_CART_REQUEST,
        isCartFetching: true,
    }
}

function receiveADDCART(data) {
    return {
        type: ADD_CART_SUCCESS,
        isCartFetching: false,
        carts: data.data
    }
}

function failureADDCART(message) {
    return {
        type: ADD_CART_FAILURE,
        isCartFetching: false,
        message
    }
}


//GET PRODUCT
export function Addcart(params) {
    return dispatch => {
        dispatch(requestADDCART())
        return axios.post(`${API_URL}/checkout/cart/add/${params.id}`, {
            "product_id": params.id,
            "quantity": 1,
            "is_configurable": false
        }, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${params.token}`
            }
        })
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureADDCART("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    // console.log(response.data)
                    dispatch(receiveADDCART(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

function requestGETCART() {
    return {
        type: GET_CART_REQUEST,
        isGetCartFetching: true,
    }
}

function receiveGETCART(data) {
    return {
        type: GET_CART_SUCCESS,
        isGetCartFetching: false,
        carts: data.data
    }
}

function failureGETCART(message) {
    return {
        type: GET_CART_FAILURE,
        isGetCartFetching: false,
        message
    }
}
//GET CART
export function GETCart(param) {

    const config = {
        headers: {
            Authorization: `Bearer ${param.token}`,
        }
    };
    return dispatch => {
        dispatch(requestGETCART())
        return axios.get(`${API_URL}/checkout/cart`, config)
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureGETCART("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                   //console.log(response.data)
                    dispatch(receiveGETCART(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}
