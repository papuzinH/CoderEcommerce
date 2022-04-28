//Packages
import { useContext } from "react";

//Contexts
import { CartContext } from "../context/CartContext";

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
