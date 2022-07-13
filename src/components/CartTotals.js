//Packages
import { useContext, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";

//Utils
import db from "../utils/firebaseconfig";

//Contexts
import { CartContext } from "../context/CartContext";

const CartTotals = ({ subtotal, taxes, discount, showBtn }) => {

  const total = subtotal + taxes - discount;
  const cart = useContext(CartContext);
  const [buttonDisabled, setButtonDisabled] = useState(false);


  return (
    <>
      <Col sm={4}>
        <Card>
          <Card.Header>Cart total</Card.Header>
          <Card.Body>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <span className="mb-0">Subtotal</span>
              {subtotal.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <span className="mb-0">Taxes</span>
              {taxes.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <Card.Text className="d-flex justify-content-between align-items-center">
              <span className="mb-0">Discount</span>-
              {discount.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
            <hr />
            <Card.Text className="d-flex justify-content-between align-items-center">
              <span className="mb-0">Total</span>
              {total.toLocaleString("es", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 4,
              })}
            </Card.Text>
           { showBtn && <div className="d-grid">
              <Link to="/checkout">
                <Button onClick={() => {setButtonDisabled(true)}} disabled={buttonDisabled} className="text-uppercase w-100" variant="primary" size="lg">
                  Checkout
                </Button>
              </Link>
            </div>}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CartTotals;
