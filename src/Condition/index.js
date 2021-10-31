import React, { Component } from 'react'

export default class ConditionClass extends Component {
  
  state = {
    isLogin: false,
  }

  toggleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
      
    }, () => {
      console.log(this.state.isLogin);
    }
    )
  }

  render() {
    if(this.state.isLogin) {
      return <div>
        <p>Đã Login</p>
        <button onClick={this.toggleLogin}>Đăng Xuất</button>
      </div>
    }

    return <div>
      <p>Chưa Login</p>
      <button onClick={this.toggleLogin}>Đăng Nhập</button>
    </div>

    // Sử dụng toán tử bậc 3
    // return (
    //   <div>
    //     {this.isLogin ? <p>Đã Login</p> : <p>Chưa Login</p>}
    //   </div>
    // )
  }
}

// function ConditionFunction() {
//   let isLogin = false;

//   if(isLogin) {
//     return <p>Đã Đăng Nhập</p>
//   }

//   return (
//     <p>Chưa Đăng Nhập</p>
//   )

//   // return (
//   //   <div>
//   //     {isLogin ? <p>Đã Login</p> : <p>Chưa Login</p>}
//   //   </div>
//   // )
// }












