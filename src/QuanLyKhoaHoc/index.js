import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getCourses } from "../redux/actions/coursesAction"
import axios from "axios";

// Lấy danh sách khóa học từ API và reder() ra giao diện
export default function QuanLyKhoaHoc() {
//   const [courses, setCourses] = useState([]);
  const {data, isLoading, error} = useSelector(state => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    // async function hanldeGetCourses() {
    //   const { data } = await axios({
    //     method: "GET",
    //     url:
    //       "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    //   });

    // //   setCourses(data);
    //      dispatch(getCourses(data));
    // }
    // hanldeGetCourses();
    dispatch(getCourses());
  }, []);

  if (isLoading) {
    // TODO: tạo <Loading /> component thế vào
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
  );
}
