//Packages
import { useContext, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";

//Components
import ModalConfirmation from "./ModalConfirmation";

//Utils
import db from "../utils/firebaseconfig";

//Contexts
import { CartContext } from "../context/CartContext";

const CartTotals = ({ subtotal, taxes, discount }) => {

  const total = subtotal + taxes - discount;
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [modalText, setModalText] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createOrder = () => {
    //Guardo todos los items de mi cart.
    const itemsForDB = cart.cartList.map((item) => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.priceItem,
    }));

    cart.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.quantityItem),
      });
    });

    let order = {
      buyer: {
        name: "Leo Messi",
        email: "leo@messi.com",
        phone: "123456789",
      },
      total: total,
      items: itemsForDB,
      date: serverTimestamp(),
    };

    const createOrderInFirestore = async () => {
      // Add a new document with a generated id

      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore()
      .then((result) =>
        alert(
          "Your order has been created successfully!. Your Order ID: " +
          result.id
        )
      )
      .catch((err) => console.log(err));

    cart.cleanCart();
  };

  return (
    <>
      <ModalConfirmation handleClose={handleClose} handleFunction={createOrder} show={show} text={modalText} />
      <Col sm={4}>
        <Card>
          <Card.Header>Cart total</Card.Header>
          <Card.Body>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Subtotal</p>
              {subtotal.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Taxes</p>
              {taxes.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Discount</p>-
              {discount.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <hr />
            <Card.Text className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Total</p>
              {total.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <div className="d-grid">
              <Button className="text-uppercase" onClick={() => {setModalText("Do you want to confirm you order?"); handleShow()}} variant="primary" size="lg">
                Checkout
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CartTotals;
