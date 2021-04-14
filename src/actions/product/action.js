import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from '../actionTypes'
import axios from 'axios';

function requestGETPRODUCT() {
    return {
        type: GET_PRODUCT_REQUEST,
        isFetching: true,
    }
}

function receiveGETPRODUCT(data) {
    return {
        type: GET_PRODUCT_SUCCESS,
        isFetching: false,
        products:data.data
    }
}

function failureGETPRODUCT(message) {
    return {
        type: GET_PRODUCT_FAILURE,
        isFetching: false,
        message
    }
}


//GET PRODUCT
export function GETProduct() {
    
    return dispatch => {
        dispatch(requestGETPRODUCT())
        return axios.get('http://yazilimisleri.com/api/products')
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


