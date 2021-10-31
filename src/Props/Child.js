import React, { Component } from 'react'

// Dữ liệu từ component cha truyền xuống sẽ được nằm trong object this.props
// Props là read-only. Chỉ dùng để render ra giao diện, không được thay đổi nó
// Props thay đổi, component render sẽ render lại
export default class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <p>
        Message: {this.props.message}
      </p>
    )
  }
}
