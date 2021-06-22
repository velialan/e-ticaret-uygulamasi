import { ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE, DELETE_CART_FAILURE, DELETE_CART_SUCCESS, DELETE_CART_REQUEST, UPDATE_CART_FAILURE, UPDATE_CART_SUCCESS, UPDATE_CART_REQUEST } from '../actionTypes'
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

    console.log(params)
    return dispatch => {
        dispatch(requestADDCART())
        return axios.post(`${API_URL}/checkout/cart/add/${params.id}?login=true`, {
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
                    console.log(response.data)
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


function requestDELETECART() {
    return {
        type: DELETE_CART_REQUEST,
        isDeleteCartFetching: true,
    }
}

function receiveDELETECART(data) {
    return {
        type: DELETE_CART_SUCCESS,
        isDeleteCartFetching: false,
        carts: data.data
    }
}

function failureDELETECART(message) {
    return {
        type: DELETE_CART_FAILURE,
        isDeleteCartFetching: false,
        message
    }
}
//REMOVE CART
export function DeleteCart(param) {

    const config = {
        headers: {
            Authorization: `Bearer ${param.token}`,
        }
    };
    return dispatch => {
        dispatch(requestDELETECART())
        return axios.get(`${API_URL}/checkout/cart/remove-item/${param.cart_item_id}`, config)
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureDELETECART("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    console.log(response.data)
                    dispatch(receiveDELETECART(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}


// function requestUPDATECART() {
//     return {
//         type: UPDATE_CART_REQUEST,
//         isUpdateCartFetching: true,
//     }
// }

// function receiveUPDATECART(data) {
//     return {
//         type: UPDATE_CART_SUCCESS,
//         isUpdateCartFetching: false,
//         carts: data.data
//     }
// }

// function failureUPDATECART(message) {
//     return {
//         type: UPDATE_CART_FAILURE,
//         isUpdateCartFetching: false,
//         message
//     }
// }
// //UPDATE CART
// export function UpdateCart(param) {

//     const config = {
//         headers: {
//             Authorization: `Bearer ${param.token}`,
//         }
//     };
//     return dispatch => {
//         dispatch(requestUPDATECART())
//         return axios.get(`${API_URL}/checkout/cart/update`, {
//             param?.cart_item_id: param.quantity           
//         }, config)
//             .then(response => {
//                 if (response.status != 200) {
//                     dispatch(failureUPDATECART("request failed"))
//                     return Promise.reject("request failed")
//                 } else if (response.status == 200) {
//                     console.log(response.data)
//                     dispatch(receiveUPDATECART(response.data))
//                 }
//             }).catch(err => console.log("Error: ", err))
//     }
// }
// PUT <host>/api/checkout/cart/update