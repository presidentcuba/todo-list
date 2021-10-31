import React, { useState, useEffect } from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // Tương đương componentDidMount + componentDidUpdate
  // Chạy mỗi lần sau khi render
  useEffect(() => {
    console.log("Chạy sau khi render");
    console.log("Count:", count);
  });

  // Tương đương componentDidMount
  // Chỉ chạy 1 lần sau khi render
  // Chú ý tham số thứ 2 là 1 array rỗng
  useEffect(() => {
    console.log("Chạy 1 lần sau khi render");

    // Khi useEffect có return về 1 function, function này được chạy trước khi component bị huỷ, tương đương componentWillUnmount
    // Chỉ nên return bên trong useEffect có tham số thứ 2 là 1 array rỗng
    return () => {
      console.log("Chạy trước khi component bị Huỷ");
    };
  }, []);

  // Tương đương componentDidMount + componentDidUpdate
  // Nhưng chỉ chạy lại sau khi render với điều kiện giá trị của biến count thay đổi
  useEffect(() => {
    console.log("Giá trị count thay đổi: ", count);
  }, [count]);

  return (
    <div>
      <h3>Demo Count</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Count</button>

      <h3>Demo Count1</h3>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click Count1</button>
    </div>
  );
}
