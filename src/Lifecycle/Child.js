import React, { Component, PureComponent } from 'react'

// PureComponent: React sẽ tự xử lý shouldComponentUpdate cho mình, 
// nó sẽ tự động so sánh props hoặc state với props và state mới. nếu thay đổi sẽ
// reder lại, còn không sẽ không render lại

// Chỉ so sánh được Primitives value(string, number, boolean, null, undefined), khi so sánh
// obj hoặc arr nó sẽ luôn trả về giá trị true


export default class Child extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      total: props.count * 1000
    }
  }

// Chạy sau khi props hoặc state thay đổi, và chạy trước render
// Nếu return vè true => chạy tiếp tục với render
// Nếu return về false => redder không được chạy
// Cung cấp giá trị mới của props và state
  // shouldComponentUpdate(nextProps, nextState) {
  //   // Chỉ khi nào props count thay đổi component mới được render lại
  //   if (nextProps.count !== this.props.count) {
  //     return true;
  //   }
  //   return false;
  // }

  // Trường hợp state của component con phụ thuộc vào props của component cha
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps)
    console.log("props", this.props)
    if(prevProps.count !== this.props.count) {
      this.setState({total: this.props.count * 1000})
    }
  }

  componentWillUnmount() {
    console.log("Run componentWillUnmount")
  }

  render() {
    console.log('Child render lại')
    return (
      <div>
        <p>Total: {this.state.total}</p>
      </div>
    )
  }
}
