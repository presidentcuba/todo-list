import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        const {product} = this.props;
        if (!product) return null;
        return <div className="row">
                    <div className="col-sm-4">
                        <img src={product.hinhAnh} width="100%" height="100%" alt="product"/>
                    </div>
                    <div className="col-sm-8">
                        <h3>Thông số kĩ thuật</h3>
                        <p>Màn hình: {product.manHinh}</p>
                        <p>Hệ điều hành: {product.heDieuHanh}</p>
                        <p>Camera trước: {product.cameraTruoc}</p>
                        <p>Camera sau: {product.cameraSau}</p>
                        <p>RAM: {product.ram}</p>
                        <p>ROM: {product.rom}</p>
                    </div>
            </div>;
    }
}
