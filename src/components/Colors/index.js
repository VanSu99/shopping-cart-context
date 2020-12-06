import React from "react";

export default function Colors({ colors }) {
  return (
    <>
      {colors?.map((color, index) => (
        <button key={index} style={{ background: color }}></button>
      ))}
    </>
  );
}
