import {GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAILURE} from '../constants/testCallApi';
const initialState = {
    data: [],
    isLoading: false,
    error: null,
}

function testApiReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INFO_REQUEST: {
            return {...state, isLoading: true, error: ""}
        }
        case GET_INFO_SUCCESS: {
            return {...state, isLoading: false, data: action.payload.data}
        }
        case GET_INFO_FAILURE: {
            return {...state, isLoading: false, error: action.payload.error}
        }
        default:
            return state;
    }
}
export default testApiReducer;