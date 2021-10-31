// import React, { Component } from "react";

// export default class DataBindingClass extends Component {
//   content = "Hello Reactjs";

//   xuatThongTin = (name, age) => {
//     return (
//       <div>
//         <p>{name}</p>
//         <p>{age}</p>
//       </div>
//     );
//   };

//   render() {
//     let a = "Hello";
//     let title = "Cybersoft";
//     return (
//       <div>
//         <p>{a}</p>
//         <p>{title}</p>
//         <p>{this.content}</p>

//         {this.xuatThongTin('Dan Nguyen', 25)}
//       </div>
//     );
//   }
// }
import React, { Component } from 'react'

export default class DataBindingClass extends Component {

  firstName = "Tỉnh";
  lastName = "Dương";
  getFullName = (message) => {
    console.log(message);
  }
  render() {
    
    return (
      <div>
        <p>{this.firstName}</p>
        <button onClick={() => this.getFullName("show message")}>Click me</button>

      </div>
    )
  }
}

