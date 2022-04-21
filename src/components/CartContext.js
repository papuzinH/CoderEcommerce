import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
      //Chequeo si ya existe el producto en mi cart
    let productInCart = cartList.find(one_product => one_product.idItem === item.id);
    if ( productInCart === undefined) {
        setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.photo1,
                nameItem: item.name,
                priceItem: item.price,
                quantityItem: quantity
            }
        ]);
    } else {
        productInCart.quantityItem += quantity;
    }
  };

  const removeOfCart = (id) => {
      let cartFiltered = cartList.filter(one_product => one_product.idItem !== id);
      setCartList(cartFiltered)
  }

  const cleanCart = () => {
      setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, cleanCart, removeOfCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
