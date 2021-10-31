import React, { Component } from "react";

export default class EventClass extends Component {
  constructor(props) {
    super(props);

    this.showMessage = this.showMessage.bind(this);
  }

  showMessage() {
    console.log(this);
    alert("Hello");
  };

  // showMessage = () => {
  //   // Để có thể sử dụng this ở đây, showMessage phải viết theo kiểu arrow function
  //   console.log(this)
  //   alert("Hello");
  // };

  showFullName = (name) => {
    alert(`Hello ${name}`);
  };

  handleChange = (event) => {
    alert(event.target.value);
  };

  render() {
    return (
      <div>
        <button onClick={this.showMessage}>Click Message</button>
        <button onClick={() => this.showFullName("Dan")}>Click Name</button>
        <button onClick={this.showFullName.bind(null, "Dan")}>
          Click Name 2
        </button>

        <input onChange={this.handleChange} />
        <input onChange={(event) => this.handleChange(event)} />
      </div>
    );
  }
}
