import React, { Component } from 'react'

export default class ProductItem extends Component {
    getProduct = () => {
        console.log("click", this.props.product);
        this.props.getProduct(this.props.product)
    }
    render() {
        const {product} = this.props;
        return (
            <div className="card">
                <img className="card-img-top"  height="300px" src={product.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p className="card-text">{product.manHinh}</p>
                    <p className="card-text">{product.heDieuHanh}</p>
                    <button onClick = {this.getProduct} className="btn btn-success">Xem Chi Tiết</button>
                    <button onClick = { () => this.props.addToCart(product)} className="btn btn-danger">Thêm Giỏ Hàng</button>
                </div>
          </div>
        )
    }
}
