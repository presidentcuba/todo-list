import React, { Component } from "react";
import Child from "./Child";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    console.log("Run Constructor");
    this.state = {
      count: 0,
      count1: 0
    };
  }

  // Gọi API
  // setState
  // Tương tác với DOM
  // setTimeout, setInterval
  // Chỉ chạy 1 lần duy nhất sau khi render lần đầu
  componentDidMount() {
    document.getElementById("demo").addEventListener("click", () => {});

    this.timmer = setTimeout(() => {}, 1000);

    console.log("Run componentDidMount");
  }

  // Chạy trước khi component bị huỷ
  // Làm những tác vụ dọn dẹp
  componentWillUnmount() {
    document.getElementById("demo").removeEventListener("click", () => {});

    clearTimeout(this.timmer);
  }

  // Khi state, props thay đổi => component render lại => chạy componentDidUpdate
  // Gọi API
  // tương tác với DOM
  // setState
  // Có thể lấy đc giá trị trước khi thay đổi của props và state
  componentDidUpdate(prevProps, prevState) {
    console.log("Run componentDidUpdate");
    console.log("Giá trị trước đó:", prevState, prevProps);
    console.log("Giá trị hiện tại:", this.state, this.props);

    // Khi setState trong componentDidUpdate cần phải cài đặt điều kiện dừng đựa vào việc so sánh props hoặc state cũ với props hoặc state mới - tránh trường hợp bị lặp vô tận.
  }

  increase = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  
  increase1 = () => {
    this.setState((state) => {
      return {
        count1: state.count1 + 1,
      };
    });
  };

  render() {
    console.log("Run Render");

    return (
      <div>
        <h1 id="demo">Lifecycle</h1>

        <button onClick={this.increase}>Click Count</button>
        <button onClick={this.increase1}>Click Count1</button>

        {/* {this.state.count < 5 ? <Child count={this.state.count} /> : null} */}

        <Child count={this.state.count} />
      </div>
    );
  }
}
