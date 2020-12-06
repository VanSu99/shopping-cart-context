import React, { useContext, useState, useRef } from "react";
import styles from "./Detail.module.css";
import Colors from "../../components/Colors";
import Sizes from "../../components/Sizes";
import Thumb from "../../components/Thumb";
import { DataContext } from "../../context/DataProvider";
import { formatPrice } from "../../utils";
import { Link } from 'react-router-dom';

export default function DetailProduct({ match }) {
  const { id } = match.params;
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const detailProduct = products.filter((product) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  //console.log(index);

  return (
    <>
      {detailProduct?.map((product) => (
        <div className={styles.details} key={product._id}>
          <div
            className={styles.img_container}
            style={{ backgroundImage: `url(${product.images[index]})` }}
            onMouseMove={handleMouseMove}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = "center")
            }
          />
          <div className={styles.box_detail}>
            <h2>{product.title}</h2>
            <h3>{formatPrice(product.price)}</h3>
            <div className={styles.colors}>
              <Colors colors={product?.colors} />
            </div>
            <div className={styles.sizes}>
              <Sizes sizes={product?.sizes} />
            </div>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <div className={styles.thumb}>
              <Thumb images={product.images} setIndex={setIndex} />
            </div>
            <Link to="/cart"
              className={styles.cart}
              onClick={() => addCart(product._id)}
            >
              Thêm vào giỏ
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
