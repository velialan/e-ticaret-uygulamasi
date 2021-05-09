import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAILURE } from '../actionTypes'
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
        return axios.post(`${API_URL}/checkout/cart/add/${params.id}?token=true`, [{
            "product_id": params.id,
            "quantity": 1,
            "is_configurable": false
        }], {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${params.token}`
            }
        })
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureADDCART("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    console.log(response.data)
                    dispatch(receiveADDCART(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}


