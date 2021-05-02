
import { GET_SLIDER_SUCCESS, GET_SLIDER_REQUEST, GET_SLIDER_FAILURE } from '../../actions/actionTypes'





function sliderReducer(state = {
    isSliderFetching: false,
    data: []
}, action) {
    switch (action.type) {
        case GET_SLIDER_REQUEST:
            return Object.assign({}, state, {
                isSliderFetching: true,
            })
        case GET_SLIDER_SUCCESS:
            return Object.assign({}, state, {
                isSliderFetching: false,
                sliders: action.sliders
            })
        case GET_SLIDER_FAILURE:
            return Object.assign({}, state, {
                isSliderFetching: false,
                errorMessage: action.message
            })

        default:
            return state
    }
}


export default sliderReducer
