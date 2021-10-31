import React, { useState } from "react";

// useState: Hàm tạo state trong function component

export default function State() {
  //  [giá trị state, hàm thay đổi giá trị state] = useState(giá trị khởi tạo)
  const [count, setCount] = useState(0);
  // Có thể tạo ra nhiều state bằng cách gọi hàm useState, không bị bó buộc trong 1 object state như class component
  const [color, setColor] = useState("red");

  // state là array
  const [products, setProducts] = useState(["IPhone 12", "Samsung S21"]);

  // state là object
  const [form, setForm] = useState({ username: "", email: "" });

  const handleIncrement = () => {
    // Hàm setCount nhận vào 1 giá trị, và giá trị đó sẽ được cập nhật cho biến count
    setCount(count + 1);
  };

  const handleChangeColor = () => {
    const colors = ["red", "green", "blue", "yellow", "black"];
    const random = Math.floor(Math.random() * 4);
    setColor(colors[random]);
  };

  const handleAddProduct = () => {
    // Cách 1: sao chép mảng products và thêm phần tử vào
    const newProducts = [...products, "Xiaomi mi 10"];
    setProducts(newProducts);

    // Cách 2: Dùng hàm callback khi setProducts
    // setProducts(products => {
    //   return [...products, "Xiaomi mi 10"]
    // })
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h3>Demo Count</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Click</button>

      <h3>Demo Color</h3>
      <p>Color: {color}</p>
      <button onClick={handleChangeColor}>Change Color</button>

      <h3>Demo Products</h3>
      <p>{products.join(", ")}</p>
      <button onClick={handleAddProduct}>Add Product</button>

      <h3>Demo Form</h3>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          className="form-control"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
