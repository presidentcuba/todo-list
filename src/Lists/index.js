import React, { Component } from "react";

export default class ListsClass extends Component {
  products = [
    { id: 1, name: "Iphone 12", price: 30000000 },
    { id: 2, name: "Samsung S21", price: 25000000 },
    { id: 3, name: "Xiaomi Mi 11", price: 20000000 },
  ];

  render() {
    return (
      <div id="demo">
        {/* {this.products.map((item, index) => {
          // logic....
          return (
            // Hạn chế sử dụng index làm key
            <p key={item.id}>
              {item.id} - {item.name} - {item.price}
            </p>
          );
        })} */}

        {this.products.map((item, index) => (
          // Hạn chế sử dụng index làm key
          <p key={item.id}>
            {item.id} - {item.name} - {item.price}
          </p>
        ))}
      </div>
    );
  }
}
