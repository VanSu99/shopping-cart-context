import React, { useContext } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils";
import { DataContext } from "../../context/DataProvider";

export default function Card() {
  // DataContext sẽ chứa các global data
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className={styles.products}>
      {products?.map((product) => (
        <div className={styles.card} key={product._id}>
          <Link to={`/products/${product._id}`}>
            <img src={product.images[0]} alt="product" />
          </Link>
          <div className={styles.box}>
            <h3 title={product.title}>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
            </h3>
            <p>{product.description}</p>
            <h4>{formatPrice(product.price)}</h4>
            <button onClick={() => addCart(product._id)}>Mua hàng</button>
          </div>
        </div>
      ))}
    </div>
  );
}
