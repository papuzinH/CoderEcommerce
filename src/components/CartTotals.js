import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartTotals = ({ subtotal, taxes, discount }) => {
  const total = subtotal + taxes - discount;
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
          <Link to="/" className="d-grid"><Button variant="primary" size="lg">Checkout</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CartTotals;
