import {GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAILURE} from '../constants/testCallApi';

import axios from 'axios';

export const getInfo = () => {
    return async (dispatch) => {
        dispatch({type: GET_INFO_REQUEST});

        try {
            const { data } = await axios ({
                method: "POST",
                url: "http://forumttu.local/api/v1/profile"
            });
            dispatch({type: GET_INFO_SUCCESS, payload: data})
            
        } catch (error) {
            dispatch({
                type: GET_INFO_FAILURE,
                payload: {error: error.response.data},
            });
        }
    }
}