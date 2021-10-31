import React from "react";

export default function DataBindingFunction() {
  let a = "Hello";
  let content = "Hello Cybersoft";

  const xuatThongTin = (name, age) => {
    return (
      <>
        <p>{name}</p>
        <p>{age}</p>
      </>
    );
  };

  return (
    <div>
      <p>{a}</p>
      <p>{content}</p>
      {xuatThongTin("Dan", 18)}
    </div>
  );
}
