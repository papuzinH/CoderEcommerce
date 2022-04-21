import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Col, Row, Container, Button } from "react-bootstrap";

const Cart = () => {
  const test = useContext(CartContext);
  console.log(test);

  return (
    <Container className="pt-5">
      <Row className="mb-5 align-items-center justify-content-between">
        <Col sm={2}>
          <h1>Your cart</h1>
        </Col>
        <Col sm={2}>
          <Button className="w-100" onClick={() => test.cleanCart()}>Clean Cart</Button>
        </Col>
      </Row>
      {test.cartList.length > 0
        ? test.cartList.map((item) => (
            <>
              <Row
                key={item.idItem}
                className="align-items-center justify-content-start"
              >
                <Col sm={2}>
                  <img src={item.imgItem} width="100%" />
                </Col>
                <Col sm={5}>
                  <h3 className="mb-0">{item.nameItem}</h3>
                </Col>
                <Col sm={2}>
                  <p>Price: </p><h4 className="mb-0">{item.priceItem}</h4>
                </Col>
                <Col sm={2}>
                  <p>Quantity:</p><h4 className="mb-0"> {item.quantityItem}</h4>
                </Col>
                <Col sm={1}>
                  <Button onClick={() => test.removeOfCart(item.idItem)}>
                    Delete
                  </Button>
                </Col>
              </Row>
              <hr />
            </>
          ))
        : ""}
    </Container>
  );
};

export default Cart;
