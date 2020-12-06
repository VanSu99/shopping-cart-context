import React, { createContext, useEffect, useState } from "react";
import { dataProducts } from "../fakeData/data";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProduct] = useState(dataProducts);
  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id
    })
    if(check) {
      const data = products.filter(product => {
        return product._id === id
      })
      setCart([...cart, ...data])
    }else {
      alert("Sản phẩm đã có trong giỏ hàng")
    }
  }

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('cart'))
    if(dataCart) {
      setCart(dataCart)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const value = {
    products: [products, setProduct],
    cart: [cart, setCart],
    addCart
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
