import {GET_KHOAHOC_REQUEST, GET_KHOAHOC_FAILURE, GET_KHOAHOC_SUCCESS} from "../constants/khoaHocContant";
const initialState = {
    data: [],
    isLoading: false,
    error: "",
}

function khoaHocReducer (state = initialState, action) {
    switch (action.type) {
        case GET_KHOAHOC_REQUEST: {
            return {...state, isLoading: true, error: ""};
        }
        case GET_KHOAHOC_SUCCESS: {
            return {...state, isLoading: false, data: action.payload.data };
        }
        case GET_KHOAHOC_FAILURE: {
            return {...state,isLoading:false, error: action.payload.error || "Something went wrong..."};
        }
        default:
            return state;
    }
}
export default khoaHocReducer;