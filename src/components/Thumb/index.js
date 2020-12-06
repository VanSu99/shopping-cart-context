import React from "react";

export default function Thumb({ images, setIndex }) {
  return (
    <>
      {images?.map((img, index) => (
        <img src={img} alt="" key={index} onClick={() => setIndex(index)} />
      ))}
    </>
  );
}
