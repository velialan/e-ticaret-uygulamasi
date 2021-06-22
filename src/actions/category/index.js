import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE } from '../actionTypes'
import axios from 'axios';
import { API_URL } from '../../config';

function requestGETCATEGORY() {
  return {
    type: GET_CATEGORY_REQUEST,
    isGetCategoryFetching: true,
  }
}

function receiveGETCATEGORY(data) {
  return {
    type: GET_CATEGORY_SUCCESS,
    isGetCategoryFetching: false,
    category: data.data
  }
}

function failureGETCATEGORY(message) {
  return {
    type: GET_CATEGORY_FAILURE,
    isGetCategoryFetching: false,
    message
  }
}
//GET CATEGORY
export function GETCategory(params) {

  return dispatch => {
    dispatch(requestGETCATEGORY())
    return axios.get(`${API_URL}/descendant-categories?parent_id=${params.parent_id}`, {
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch(failureGETCATEGORY("request failed"))
          return Promise.reject("request failed")
        } else if (response.status == 200) {
          dispatch(receiveGETCATEGORY(response.data))
        }
      }).catch(err => console.log("Error: ", err))
  }
}