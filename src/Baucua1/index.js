import React, {useState, useEffect} from 'react'
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';



const danhSachXucXac = [
    {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
    {ten: 'cua', hinhAnh: './img_BauCua/cua.png'},
    {ten: 'tom', hinhAnh: './img_BauCua/tom.png'},
    {ten: 'ca', hinhAnh: './img_BauCua/ca.png'},
    {ten: 'nai', hinhAnh: './img_BauCua/nai.png'},
    {ten: 'ga', hinhAnh: './img_BauCua/ga.png'},
]
export default function BauCua1() {

    const [tienThuong, setTienThuong] = useState(500);
    const [danhSachCuoc, setDanhSachCuoc] = useState(() => {
        return danhSachXucXac.map((item) => ({
            ...item, diemCuoc: 0,
        }));
    });

    const [xucXac, setXucXac] = useState([
        {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
        {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
        {ten: 'bau', hinhAnh: './img_BauCua/bau.png'}
    ]);
    // useEffect này sẽ được chạy sau khi mảng xucSXac thay đổi
    useEffect(() => {

        // Lọc danh sách những con có đặt cược
        const danhSachDatCuoc = danhSachCuoc.filter (item => item.diemCuoc);

        let tongDiem = 0;
        // Duyệt qua mảng danhSachDatCuoc để trả lại tiền thưởng nếu trúng
        danhSachDatCuoc.forEach((item) => {
            const found = xucXac.find(cuoc => cuoc.ten === item.ten)

            // Tìm Thấy
            if (found) {
                tongDiem += item.diemCuoc;
            }
        })
        // Tính tiến thắng cược
        xucXac.forEach((item) => {
            const found = danhSachDatCuoc.find(cuoc => cuoc.ten === item.ten);
            if (found)
            {
                tongDiem += found.diemCuoc;
            }

            // reset điểm cược về 0
            const newDanhSachCuoc = danhSachCuoc.map((item) => ({
                ...item, diemCuoc: 0
            }))
            setTienThuong(tienThuong + tongDiem);
            setDanhSachCuoc(newDanhSachCuoc);
        })
    },[xucXac])

    const xuLyDatCuoc = (item, status) => {
        const newDanhSachCuoc = danhSachCuoc.map((cuoc) => {
            if (cuoc.ten === item.ten) {
                return {
                    ...cuoc, diemCuoc: status ? cuoc.diemCuoc + 100 : cuoc.diemCuoc - 100,
                };
            }
            return cuoc;
        });
        setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
        setDanhSachCuoc(newDanhSachCuoc);
    }

    const xuLyXucXac = () => {
        const newXucXac = xucXac.map(item => {
            const random = Math.floor(Math.random() * 6);
            return danhSachXucXac[random];
        });
        setXucXac(newXucXac);
    }
    return (
        <div className="bg-secondary baucua-container">
        <div className="w-75 mx-auto">
            <img className="w-100" src="./img_BauCua/Logo.png" alt="logo"/>
        </div>
        <div className="text-center bg-warning mx-auto" style={{width:"20%"}}>
            <p className="bg-warning" style={{fontSize:"25px", border: "5px solid #cdcdcd"}}>Tiền Thưởng: {tienThuong}</p>
        </div>
        <div className="container-fluid">
            <div className="row">
                 {/* Danh sách cược */}
                <div className="col-sm-8">
                    <DanhSachCuoc xuLyDatCuoc = {xuLyDatCuoc} danhSachCuoc = {danhSachCuoc} tienThuong = {tienThuong}/>
                </div>
                {/* Danh sách xúc sắc */}
                <div className="col-sm-4">
                    <XucXac xucXac = {xucXac} xuLyXucXac = {xuLyXucXac} />
                </div>
            </div>
        </div>
    </div>
    )
}
