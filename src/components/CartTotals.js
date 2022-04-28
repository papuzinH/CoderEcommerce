import { React, useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseconfig';

const CartTotals = ({ subtotal, taxes, discount }) => {
  const total = subtotal + taxes - discount;

  const cart = useContext(CartContext)

  const createOrder = () => {
    //Guardo todos los items de mi cart.
    const itemsForDB = cart.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.priceItem
    }));


    cart.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.quantityItem)
      });
    });



    let order = {
      buyer: {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: "123456789"
      },
      total: total,
      items: itemsForDB,
      date: serverTimestamp()
    };

    console.log(order)


    const createOrderInFirestore = async () => {
      // Add a new document with a generated id

      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    createOrderInFirestore()
      .then(result => alert('Your order has been created successfully!. Your Order ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));

    cart.cleanCart();

  }

  return (
    <Col sm={4}>
      <Card>
        <Card.Header>Cart total</Card.Header>
        <Card.Body>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Subtotal</p>
            {subtotal.toLocaleString("es", { style: "currency", currency: "USD", maximumSignificantDigits: 4 })}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Taxes</p>
            {taxes.toLocaleString("es", { style: "currency", currency: "USD", maximumSignificantDigits: 4 })}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Discount</p>
            -{discount.toLocaleString("es", { style: "currency", currency: "USD", maximumSignificantDigits: 4 })}
          </Card.Text>
          <hr />
          <Card.Text className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Total</p>
            {total.toLocaleString("es", { style: "currency", currency: "USD", maximumSignificantDigits: 4 })}
          </Card.Text>
          <div className="d-grid">
            <Button onClick={createOrder} variant="primary" size="lg">Checkout</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CartTotals;
