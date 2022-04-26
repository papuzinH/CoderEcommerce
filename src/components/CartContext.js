import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    //Chequeo si ya existe el producto en mi cart
    let productInCart = cartList.find(
      (one_product) => one_product.idItem === item.id
    );
    if (productInCart === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: item.id,
          imgItem: item.photo1,
          nameItem: item.name,
          priceItem: item.price,
          quantityItem: quantity,
        },
      ]);
    } else {
      productInCart.quantityItem += quantity;
    }
  };

  const removeOfCart = (id) => {
    let cartFiltered = cartList.filter(
      (one_product) => one_product.idItem !== id
    );
    setCartList(cartFiltered);
  };

  const cleanCart = () => {
    setCartList([]);
  };

  const cartQuantity = () => {
    let total = 0
    cartList.forEach((element) => {
      total += element.quantityItem;
    })
    return total;
  };

  const cartTotalPriceItem = (idItem) => {
    let item = cartList.find(item => item.idItem == idItem)
    return item.priceItem * item.quantityItem
  }

  const cartSubTotalPrice = () => {
    let total = 0
    cartList.forEach((element) => {
      total += cartTotalPriceItem(element.idItem)
    })
    return total;
  }

  const cartTaxes = (percentage) => {
    return (cartSubTotalPrice() * percentage) / 100;
  }

  const cartDiscount = (percentage) => {
    return (cartSubTotalPrice() * percentage) / 100;
  }

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, cleanCart, removeOfCart, cartQuantity, cartSubTotalPrice, cartTotalPriceItem, cartTaxes, cartDiscount}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
