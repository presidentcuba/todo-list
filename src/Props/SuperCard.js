import React, { Component } from "react";

// Mặc định tất cả component đều có 1 props tên là children
export default class SuperCard extends Component {
  render() {
    const { title, footer } = this.props;
    return (
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">{this.props.children}</div>
        <div className="card-footer text-muted">{footer && footer()}</div>
      </div>
    );
  }
}

/*
Nội dung bên trong component SuperCard được gọi là children
<SuperCard>
  <p>ABC</p>
</SuperCard>
*/
