import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity, size) => {

    //Chequeo si ya existe el producto en mi cart
    let productInCart = cartList.find(
      (one_product) => one_product.idItem === item.id
    );
    if (productInCart) {
      if (productInCart.sizeItem === size) {
        productInCart.quantityItem += quantity;
      } else {
        addNewProduct(item.id, item.thumbnail, item.name, item.price, quantity, size)
      }
    }
    else {
      addNewProduct(item.id, item.thumbnail, item.name, item.price, quantity, size)
    }
  };

  const addNewProduct = (id, thumbnail, name, price, quantity, size) => {
    setCartList([
      ...cartList,
      {
        idItem: id,
        imgItem: thumbnail,
        nameItem: name,
        priceItem: price,
        quantityItem: quantity,
        sizeItem: size
      }
    ]);
  }


  const removeOfCart = (index) => {
    console.log(cartList, index)
    cartList.splice(index, 1)
    console.log(cartList, index)
    //setCartList(cartFiltered);
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
      value={{ cartList, addToCart, cleanCart, removeOfCart, cartQuantity, cartSubTotalPrice, cartTotalPriceItem, cartTaxes, cartDiscount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
