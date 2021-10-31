import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: null,
    };
  }

  getProduct = (product) => {
    // Lấy được product từ component ProductItem
    // setState lại cho productDetail bằng product vừa nhận đc
    console.log(product);
    this.setState({ productDetail: product });
  };

  addToCart = (product) => {
    // Trung gian để tiếp tục truyền product lên component BaiTap3
    // console.log(product);
    this.props.addToCart(product);
  };

  render() {
    const { products } = this.props;
    return (
      <>
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.maSP} className="col-sm-4">
                <ProductItem
                  product={product}
                  getProduct={this.getProduct}
                  addToCart={this.addToCart}
                />
              </div>
            );
          })}
        </div>

        <ProductDetail product={this.state.productDetail} />
      </>
    );
  }
}
