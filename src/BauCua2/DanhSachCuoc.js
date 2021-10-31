import React, {usestate} from 'react'

export default function DanhSachCuoc({danhSachCuoc, xuLyDatCuoc, tienThuong}) {

    const thayDoiCuoc = (item, status) => {
        xuLyDatCuoc(item, status);
    }
    return <div className="container">
        <div className="row">
            {danhSachCuoc.map((item) => (
                <div key={item.ten} className="col-sm-4">
                    <img className="w-100" src={item.hinhAnh} alt="xucSac"/>
                    <div className="bg-warning w-100 mt-4 text-center mb-4 py-2">
                        <span className="mr-2">Cược:</span> 
                        <button onClick= { () => thayDoiCuoc(item, false)} className="btn btn-success" disabled={!item.diemCuoc} >-</button>
                        <span className="text-success mx-2">{item.diemCuoc}</span>
                        <button onClick= { () => thayDoiCuoc(item, true)} className="btn btn-success" disabled={!tienThuong}>+</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
}
