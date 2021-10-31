import {GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE } from "../constants/coursesConstant";
import axios from 'axios'

export const getCourses = () => {
// khi sử dụng redux-thunk, action cho phép ta return về 1 action
    return async (dispatch) => {
        // dispatch action trước khi gọi API
        dispatch({ type: GET_COURSES_REQUEST})
       try {
            const {data} = await axios ({
                method: "GET",
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",

            });

            // Gọi API thành công => dispath action success
            dispatch({ type: GET_COURSES_SUCCESS, payload: {data}})
       } catch (error) {

            //Gọi API thất bại =? dispath action failure
            dispatch({
                type: GET_COURSES_FAILURE,
                payload: {error: error.response.data}
            });
            
       }
       
    }
    // return {
    //     type: GET_COURSES,
    //     payload: {data},
    // };
};