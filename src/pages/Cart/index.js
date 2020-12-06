import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../../components/Colors";
import Sizes from "../../components/Sizes";
import { DataContext } from "../../context/DataProvider";
import { formatPrice } from "../../utils";
import styles from "./Cart.module.css";

export default function CartPage() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Bạn có chắc chắn xóa sản phẩm này?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0) {
    return (
      <h3 style={{ textAlign: "center", fontSize: "3rem" }}>Giỏ hàng trống</h3>
    );
  }

  return (
    <>
      {cart?.map((product) => (
        <div className={styles.details__cart} key={product._id}>
          <div
            className={styles.img_container}
            style={{ backgroundImage: `url(${product.images[0]})` }}
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

            <div className={styles.amount}>
              <button
                className={styles.count}
                onClick={() => reduction(product._id)}
              >
                -
              </button>
              <span>{product.count}</span>
              <button
                className={styles.count}
                onClick={() => increase(product._id)}
              >
                +
              </button>
            </div>

            <div
              className={styles.delete}
              onClick={() => removeProduct(product._id)}
            >
              X
            </div>
          </div>
        </div>
      ))}

      <div className={styles.total}>
        <Link to="/payment">Thanh toán</Link>
        <h3>Tổng tiền: {formatPrice(total)}</h3>
      </div>
    </>
  );
}
