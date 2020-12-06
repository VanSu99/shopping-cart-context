import React, { useState, useContext } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/assets/logo.png" alt="shopdongho" />
        </Link>
      </div>
      <div className={styles.nav__mobile} onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <ul style={styleMenu}>
        <li className={styles.nav__link}>
          <Link to="/">Top 100</Link>
        </li>
        <li className={styles.nav__link}>
          <Link to="/products">Sản phẩm</Link>
        </li>
        <li className={styles.nav__link}>
          <Link to="/about">Về chúng tôi</Link>
        </li>
        <li className={styles.nav__link}>
          <Link to="/">Liên hệ</Link>
        </li>
        <li className={styles.nav__link}>
          <Link to="/">Login / Register</Link>
        </li>
        <li className={styles.nav__mobile_close} onClick={toggleMenu}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </li>
      </ul>
      <div className={styles.cart}>
        <span>{cart.length}</span>
        <Link to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </header>
  );
}
