import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from '../actionTypes'
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
export function GETProduct({param}) {

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
                    console.log(response.data)
                    dispatch(receiveGETPRODUCT(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}


