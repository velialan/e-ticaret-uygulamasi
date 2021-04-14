
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_FAILURE } from '../../actions/actionTypes'





function productReducer(state = {
    isFetching: false,
    data: []
}, action) {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                products: action.products
            })
        case GET_PRODUCT_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            })

        default:
            return state
    }
}


export default productReducer
