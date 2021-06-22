
import { GET_PRODUCT_SUCCESS, GET_PRODUCT_REQUEST, GET_PRODUCT_FAILURE, ADD_WISHLIST_FAILURE, ADD_WISHLIST_SUCCESS, ADD_WISHLIST_REQUEST } from '../../actions/actionTypes'




function productReducer(state = {
    isProductFetching: false,
    isWishListFetching: false,
}, action) {
    switch (action.type) {

        case GET_PRODUCT_REQUEST:
            return Object.assign({}, state, {
                isProductFetching: true,
            })
        case GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, {
                isProductFetching: false,
                products: action.products
            })
        case GET_PRODUCT_FAILURE:
            return Object.assign({}, state, {
                isProductFetching: false,
                errorMessage: action.message
            })

        case ADD_WISHLIST_REQUEST:
            return Object.assign({}, state, {
                isWishListFetching: true,
            })
        case ADD_WISHLIST_SUCCESS:
            return Object.assign({}, state, {
                isWishListFetching: false,
                products: action.products
            })
        case ADD_WISHLIST_FAILURE:
            return Object.assign({}, state, {
                isWishListFetching: false,
                errorMessage: action.message
            })
        default:
            return state
    }
}


export default productReducer
