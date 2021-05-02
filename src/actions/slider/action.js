import { GET_SLIDER_REQUEST, GET_SLIDER_SUCCESS, GET_SLIDER_FAILURE } from '../actionTypes'
import { API_URL } from '../../config';
import axios from 'axios';

function requestGETSLIDER() {
    return {
        type: GET_SLIDER_REQUEST,
        isSliderFetching: true,
    }
}

function receiveGETSLIDER(data) {
    return {
        type: GET_SLIDER_SUCCESS,
        isSliderFetching: false,
        sliders: data.data
    }
}

function failureGETSLIDER(message) {
    return {
        type: GET_SLIDER_FAILURE,
        isSliderFetching: false,
        message
    }
}


//GET SLİDER
export function GETSlider() {

    return dispatch => {
        dispatch(requestGETSLIDER())
        return axios.get(`${API_URL}/sliders`)
            .then(response => {
                if (response.status != 200) {
                    dispatch(failureGETSLIDER("request failed"))
                    return Promise.reject("request failed")
                } else if (response.status == 200) {
                    console.log(response.data)
                    dispatch(receiveGETSLIDER(response.data))
                }
            }).catch(err => console.log("Error: ", err))
    }
}


