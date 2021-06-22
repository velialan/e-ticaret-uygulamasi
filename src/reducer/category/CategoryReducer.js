
import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from '../../actions/actionTypes'





function categoryReducer(state = {
  isGetCategoryFetching: false,
  errorMessage: '',
  category: []
}, action) {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isGetCategoryFetching: true,
      })
    case GET_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isGetCategoryFetching: false,
        category: action.category
      })
    case GET_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isGetCategoryFetching: false,
        errorMessage: action.message
      })

    default:
      return state
  }
}


export default categoryReducer
