import React, { Component } from "react";

export default class ProductCart extends Component {
  
  render() {
    const tongTien = this.props.carts.reduce((total, item) => {
      return total + item.soLuong * item.giaBan;
    }, 0);
    return (
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ Hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <th>Mã SP</th>
                    <th>Tên SP</th>
                    <th>Hình Ảnh</th>
                    <th>Số Lượng</th>
                    <th>Đơn Giá</th>
                    <th>Thành Tiền</th>
                  </thead>
                  <tbody>
                    {this.props.carts.map((item) => {
                      return (
                        <tr key = {item.maSP}>
                          <td>{item.maSP}</td>
                          <td>{item.tenSP}</td>
                          <td>{item.hinhAnh}</td>
                          <td>{item.soLuong}</td>
                          <td>{item.giaBan}</td>
                          <td>{item.giaBan * item.soLuong}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan="6">
                        <p className="text-right">Tổng tiền: {tongTien}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
