import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, ADD_WISHLIST_SUCCESS, ADD_WISHLIST_REQUEST, ADD_WISHLIST_FAILURE } from '../actionTypes'
import axios from 'axios';
import { API_URL } from '../../config';

function requestGETPRODUCT() {
    return {
        type: GET_PRODUCT_REQUEST,
        isProductFetching: true,
    }
}

function receiveGETPRODUCT(data) {
    return {
        type: GET_PRODUCT_SUCCESS,
        isProductFetching: false,
        products: data.data
    }
}

function failureGETPRODUCT(message) {
    return {
        type: GET_PRODUCT_FAILURE,
        isProductFetching: false,
        message
    }
}


//GET PRODUCT
export function GETProduct({ param }) {

    return dispatch => {
        dispatch(requestGETPRODUCT())
        return axios.get(`${API_URL}/products${param}`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureGETPRODUCT("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    //    console.log(response.data)
                    dispatch(receiveGETPRODUCT(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

function requestADDWISHLIST() {
    return {
        type: ADD_WISHLIST_REQUEST,
        isWishListFetching: true,
    }
}

function receiveADDWISHLIST(data) {
    return {
        type: ADD_WISHLIST_SUCCESS,
        isWishListFetching: false,
        products: data.data
    }
}

function failureADDWISHLIST(message) {
    return {
        type: ADD_WISHLIST_FAILURE,
        isWishListFetching: false,
        message
    }
}

//ADD WISHLIST
export function ADDWishlist(params) {

    console.log(params)
    return dispatch => {
        dispatch(requestADDWISHLIST())
        return axios.get(`${API_URL}/wishlist/add/${params.product_id}`, {
            "product_id": params.product_id
        }, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${params.token}`
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.status != 200) {
                    dispatch(failureADDWISHLIST("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {

                    dispatch(receiveADDWISHLIST(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}
