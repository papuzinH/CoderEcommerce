import "bootstrap-icons/font/bootstrap-icons.css";
import { React, useContext, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const cart = useContext(CartContext);

  return (
    <div className="cart">
      <i className="bi bi-cart"></i>
      {cart.cartQuantity() > 0 && (
        <div className="number-notif">{cart.cartQuantity()}</div>
      )}
    </div>
  );
};

export default CartWidget;
