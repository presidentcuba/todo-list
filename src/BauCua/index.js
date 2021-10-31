import React, {useState, useEffect} from 'react'
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';

const danhSachXucSac = [
    {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
    {ten: 'cua', hinhAnh: './img_BauCua/cua.png'},
    {ten: 'tom', hinhAnh: './img_BauCua/tom.png'},
    {ten: 'ca', hinhAnh: './img_BauCua/ca.png'},
    {ten: 'nai', hinhAnh: './img_BauCua/nai.png'},
    {ten: 'ga', hinhAnh: './img_BauCua/ga.png'}
]
export default function BauCua() {
    const [tienThuong, setTienThuong] = useState(500);
    const [danhSachCuoc, setDanhSachCuoc] = useState(() => {
        return danhSachXucSac.map((item) => ({
            ...item, diemCuoc: 0,
        }))
    })
    const [xucXac, setXucXac] = useState([
        {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
        {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
        {ten: 'bau', hinhAnh: './img_BauCua/bau.png'},
    ])
    //useEffect này sẽ được chạy sau khi mảng xucXac thay đổi
    useEffect(() => {
        // => Tính điểm

        // Lọc danh sách những con có đặt cược
        const danhSachDatCuoc = danhSachCuoc.filter(item => item.diemCuoc);
        
        let tongDiem = 0;
        // Duyệt qua danhSachDatCuoc để trả lại tiền cược nếu trúng
        danhSachDatCuoc.forEach((item) => {
            const found = xucXac.find(cuoc => cuoc.ten === item.ten) // Hàm find trả về 1 obj

            // TÌm thấy xúc xắc trùng với item trong danhSachDatCuoc
            if (found) {
                tongDiem += item.diemCuoc;
            }
        })

        // Duyệt qua mảng xúc xắc để tính tiền thắng cược

        xucXac.forEach((item) => {
            const found = danhSachDatCuoc.find(cuoc => cuoc.ten === item.ten);
            if (found) {
                tongDiem += found.diemCuoc;
            }
            // Reset điểm cược về 0
            const newDanhSachCuoc = danhSachCuoc.map((item)=> ({
                ...item, diemCuoc: 0,
            }));
            setTienThuong(tienThuong + tongDiem);
            setDanhSachCuoc(newDanhSachCuoc);
        })
    }, [xucXac])

    const xuLyDatCuoc = (item, status) => {
        const newDanhSachCuoc = danhSachCuoc.map((cuoc) => {
            if (cuoc.ten === item.ten) {
                return {
                    ...cuoc, diemCuoc: status ? cuoc.diemCuoc + 100 : cuoc.diemCuoc - 100,
                }
            }
            return cuoc;
        });

        setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
        setDanhSachCuoc(newDanhSachCuoc);
    };
    const xuLyXucXac = () => {
        const newXucXac = xucXac.map(item => {
            //Math.random() = (max - min + 1) + min
            const random = Math.floor(Math.random() * 6);
            return danhSachXucSac[random];
        })
        setXucXac(newXucXac); // setXucXac: là hàm bất đồng bộ.
    };
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
                        <DanhSachCuoc xuLyDatCuoc={xuLyDatCuoc} tienThuong={tienThuong} danhSachCuoc={danhSachCuoc} />
                    </div>
                    {/* Danh sách xúc sắc */}
                    <div className="col-sm-4">
                        <XucXac xuLyXucXac={xuLyXucXac} xucXac={xucXac} />
                    </div>
                </div>
            </div>
        </div>
    )
}
