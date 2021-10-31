import React, { Component } from 'react'
import ProductCart from './ProductCart';
import ProductList from './ProductList';

export default class Baitap3Again extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: [
            {
              maSP: 1,
              tenSP: "Vivo 850",
              manHinh: 'AMOLED, 6.2", Full HD+',
              heDieuHanh: "Android 9.0 (Pie)",
              cameraTruoc: "20 MP",
              cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
              ram: "4 GB",
              rom: "64 GB",
              giaBan: 5700000,
              hinhAnh: "./img/sp_vivo850.png",
            },
            {
              maSP: 2,
              tenSP: "Samsung Note 7",
              manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
              heDieuHanh: "Android 9.0 (Pie); Flyme",
              cameraTruoc: "20 MP",
              cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
              ram: "4 GB",
              rom: "64 GB",
              giaBan: 7600000,
              hinhAnh: "./img/sp_note7.png",
            },
            {
              maSP: 3,
              tenSP: "Iphone XS Max",
              manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
              heDieuHanh: "iOS 12",
              cameraSau: "Chính 12 MP & Phụ 12 MP",
              cameraTruoc: "7 MP",
              ram: "4 GB",
              rom: "64 GB",
              giaBan: 27000000,
              hinhAnh: "./img/sp_iphoneX.png",
            },
          ],
          carts: [],
        };
      }

      addToCart = (product) => {
          console.log(product);

          //Kiểm tra sản phầm có tồn tại trong giỏ hàng hay chưa

          const index = this.state.carts.findIndex((item) => item.maSP === product.maSP
          );
          
          if (index === -1) {
              // Thêm mới, và set số lượng sản phẩm là 1
              const carts = [...this.state.carts, {...product, soLuong: 1}];
              this.setState({ carts });
          } else {
              // Đã tồn tại, cập nhất số lượng
              const carts = [...this.state.carts];

              carts[index].soLuong += 1;
              this.setState({ carts });
          }
      }
      componentDidMount() {
          const carts = localStorage.getItem("carts");

          if (carts) {
              this.setState( {carts: JSON.parse(carts) });
          }
      }

      componentDidUpdate(prevProps, prevState) {
          // Kiểm tra xem state giỏ hàng có thay đổi  hay không
          // So sánh địa chỉ vùng nhớ

          if (this.state.carts !== prevProps.carts) {
              localStorage.setItem("carts", JSON.stringify(this.state.carts));
          }
      }
    
    render() {
        return (
            <div className="container">
                <div className="text-right mb-4">
                    <button data-toggle="modal" data-target="#modelId" className="btn btn-success">Giỏ Hàng</button>
                </div>
                <ProductList addToCart = {this.addToCart} products = {this.state.products} />
                <ProductCart carts = {this.state.carts}/>
            </div>
        )
    }
}
