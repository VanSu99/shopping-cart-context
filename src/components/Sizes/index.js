import React from "react";

export default function Sizes({ sizes }) {
  return (
    <>
      {sizes?.map((size, index) => (
        <button key={index}>{size}</button>
      ))}
    </>
  );
}
