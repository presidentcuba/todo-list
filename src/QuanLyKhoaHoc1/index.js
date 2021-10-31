import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import {getKhoaHoc} from "../redux/actions/khoaHocAction";

export default function QuanLyKhoaHoc1() {
    // const {data, setData} = useState([]);
    const { data, isLoading, error } = useSelector(state => state.khoaHoc);
    const  dispatch  = useDispatch();

    useEffect(() => {
        // async function handleGetKhoaHoc() {
        //     const {data} = await axios({
        //         method: "GET",
        //         url:
        //         "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
        //     });

        //     setData(data);
        // }
        // handleGetKhoaHoc();
        dispatch(getKhoaHoc());

    },[]);

    if (isLoading) {
        // TODO: tạo <Loading /> component thế vào
        console.log(isLoading)
        return <div>Loading...</div>
    }
    
    if (error) {
    return <div>{error}</div>
    }

    return (
        <div className="container">
            <div className="row">
                {data.map((item) => (
                    <div key = {item.maKhoaHoc} className="col-sm-4 card">
                        <img className="card-img-top" src={item.hinhAnh} alt="khoahoc" />
                        <div className="card-body">
                        <h4 className="card-title">{item.tenKhoaHoc}</h4>
                        <p className="card-text">{item.moTa}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
