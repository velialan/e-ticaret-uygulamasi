
import { ADD_CART_SUCCESS, ADD_CART_REQUEST, ADD_CART_FAILURE } from '../../actions/actionTypes'





function cartReducer(state = {
    isCartFetching: false,
    data: []
}, action) {
    switch (action.type) {
        case ADD_CART_REQUEST:
            return Object.assign({}, state, {
                isCartFetching: true,
            })
        case ADD_CART_SUCCESS:
            return Object.assign({}, state, {
                isCartFetching: false,
                carts: action.carts
            })
        case ADD_CART_FAILURE:
            return Object.assign({}, state, {
                isCartFetching: false,
                errorMessage: action.message
            })

        default:
            return state
    }
}


export default cartReducer
