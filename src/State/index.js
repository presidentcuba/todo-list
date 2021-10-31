import React, { Component } from "react";

export default class StateClass extends Component {
  state = {
    // Demo 1
    isLogin: false,
    // Demo 2
    count: 0,
    doubleCount: 0,
  };

  toggleLogin = () => {
    // Không được thay đổi state trực tiếp
    // this.state.isLogin = !this.state.isLogin;

    // Phải thay đổi state thông qua hàm setState
    this.setState(
      {
        isLogin: !this.state.isLogin,
      },
      // Sau khi setState thành công sẽ nhảy vào trong callback này
      () => {
        console.log(this.state.isLogin); // Giá trị mới của state
      }
    );
    // Không thể lấy kết quả mới sau khi setState ngay đây, bởi vì setState là 1 hàm bất đồng bộ
    console.log(this.state.isLogin); // Vẫn là giá trị cũ
  };

  handleIncrement = () => {
    // Cách 1: Dùng callback ở tham số thứ 2, để nhận giá trị state mới nhất
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     this.setState({
    //       doubleCount: this.state.count * 2,
    //     });
    //   }
    // );

    // Cách 2: Tham số thứ 1 nhận vào là 1 callback với tham số là state
    // state này được đảm bảo luôn luôn là mới nhất
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });

    this.setState((state) => {
      return {
        doubleCount: state.count * 2,
      };
    });
  };

  render() {
    // Demo 1
    // if (this.state.isLogin) {
    //   return (
    //     <div>
    //       <p>Đã Login</p>
    //       <button onClick={this.toggleLogin}>Đăng Xuất</button>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <p>Chưa Login</p>
    //     <button onClick={this.toggleLogin}>Đăng Nhập</button>
    //   </div>
    // );

    // Demo 2
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>DoubleCount: {this.state.doubleCount}</p>

        <button onClick={this.handleIncrement}>Click</button>
      </div>
    );
  }
}
