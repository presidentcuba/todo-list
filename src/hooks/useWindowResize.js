import React, { useState, useEffect } from "react";

export default function useWindowResize() {
  // Sau mỗi lần render nó sẽ tính toán lại giá trị biểu thức mặc dù không gán lại cho biến size
  // const [size, setSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // Nếu useState nhận vào tham số là 1 function, nó sẽ chỉ chạy 1 lần duy nhất khi khởi tạo
  const [size, setSize] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const { innerWidth, innerHeight } = window;
    setSize({
      width: innerWidth,
      height: innerHeight,
    });
  };

  // Custom hook sẽ return về data thay vì jsx
  // return [size.width, size.height] // return về array

  return { width: size.width, height: size.height }; // return về object
}
