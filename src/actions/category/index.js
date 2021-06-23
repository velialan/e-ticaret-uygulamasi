import { GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILURE, GET_SUB_CATEGORY_REQUEST, GET_SUB_CATEGORY_SUCCESS, GET_SUB_CATEGORY_FAILURE, GET_ALL_CATEGORY_REQUEST, GET_ALL_CATEGORY_SUCCESS, GET_ALL_CATEGORY_FAILURE } from '../actionTypes'
import axios from 'axios';
import { API_URL } from '../../config';
//GET CATEGORY
function requestGETCATEGORY() {
  return {
    type: GET_CATEGORY_REQUEST,
    isGetCategoryFetching: true,
  }
}
//GET CATEGORY
function receiveGETCATEGORY(data) {
  return {
    type: GET_CATEGORY_SUCCESS,
    isGetCategoryFetching: false,
    category: data.data
  }
}
//GET CATEGORY
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

//GET SUB CATEGORY
function requestGETSUBCATEGORY() {
  return {
    type: GET_SUB_CATEGORY_REQUEST,
    isGetSubCategoryFetching: true,
  }
}
//GET SUB CATEGORY
function receiveGETSUBCATEGORY(data) {
  return {
    type: GET_SUB_CATEGORY_SUCCESS,
    isGetSubCategoryFetching: false,
    category: data.data
  }
}
//GET SUB CATEGORY
function failureGETSUBCATEGORY(message) {
  return {
    type: GET_SUB_CATEGORY_FAILURE,
    isGetSubCategoryFetching: false,
    message
  }
}


//GET SUB CATEGORY
export function GETSubCategory(params) {

  return dispatch => {
    dispatch(requestGETSUBCATEGORY())
    return axios.get(`${API_URL}/descendant-categories?parent_id=${params.parent_id}`, {
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(response => {
        if (response.status != 200) {
          dispatch(failureGETSUBCATEGORY("request failed"))
          return Promise.reject("request failed")
        } else if (response.status == 200) {
          dispatch(receiveGETSUBCATEGORY(response.data))
        }
      }).catch(err => console.log("Error: ", err))
  }
}


//GET ALL CATEGORY
function requestGETALLCATEGORY() {
  return {
    type: GET_ALL_CATEGORY_REQUEST,
    isGetAllCategoryFetching: true,
  }
}
//GET ALL CATEGORY
function receiveGETALLCATEGORY(data) {
  return {
    type: GET_ALL_CATEGORY_SUCCESS,
    isGetAllCategoryFetching: false,
    category: data.data
  }
}
//GET ALL CATEGORY
function failureGETALLCATEGORY(message) {
  return {
    type: GET_ALL_CATEGORY_FAILURE,
    isGetAllCategoryFetching: false,
    message
  }
}

//GET ALL CATEGORY
export function GETAllCategory() {

  return dispatch => {
    dispatch(requestGETALLCATEGORY())
    return axios.get(`${API_URL}/categories?pagination=0`)
      .then(response => {
        if (response.status != 200) {
          dispatch(failureGETALLCATEGORY("request failed"))
          return Promise.reject("request failed")
        } else if (response.status == 200) {
          dispatch(receiveGETALLCATEGORY(response.data))
        }
      }).catch(err => console.log("Error: ", err))
  }
}