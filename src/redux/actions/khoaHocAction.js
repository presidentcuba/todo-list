import {GET_KHOAHOC_REQUEST, GET_KHOAHOC_SUCCESS, GET_KHOAHOC_FAILURE} from "../constants/khoaHocContant";
import axios from 'axios';
export const getKhoaHoc = () => {
    return async (dispatch) => {

        dispatch({type: GET_KHOAHOC_REQUEST});

        try {
            const {data} = await axios ({
                method: "GET",
                url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09",

            });
            // Gọi API thành công
            dispatch({type: GET_KHOAHOC_SUCCESS, payload: {data}});
        } catch (error) {
            // Gọi API thất bại
            dispatch({
                type: GET_KHOAHOC_FAILURE,
                payload: {error: error.response.data},
            });
        }

    }
}