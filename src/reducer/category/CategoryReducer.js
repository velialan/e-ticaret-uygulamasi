
import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE, GET_SUB_CATEGORY_REQUEST, GET_SUB_CATEGORY_SUCCESS, GET_SUB_CATEGORY_FAILURE, GET_ALL_CATEGORY_REQUEST, GET_ALL_CATEGORY_SUCCESS, GET_ALL_CATEGORY_FAILURE } from '../../actions/actionTypes'





function categoryReducer(state = {
  isGetCategoryFetching: true,
  isGetSubCategoryFetching: true,
  isGetAllCategoryFetching: true,
  errorMessage: '',
  category: [],
  subCategory: [],
  allCategory: []
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

    case GET_SUB_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isGetSubCategoryFetching: true,
      })
    case GET_SUB_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isGetSubCategoryFetching: false,
        subCategory: action.category
      })
    case GET_SUB_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isGetSubCategoryFetching: false,
        errorMessage: action.message
      })

    case GET_ALL_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        isGetAllCategoryFetching: true,
      })
    case GET_ALL_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        isGetAllCategoryFetching: false,
        allCategory: action.category
      })
    case GET_ALL_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        isGetAllCategoryFetching: false,
        errorMessage: action.message
      })

    default:
      return state
  }
}


export default categoryReducer
