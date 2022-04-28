import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Col, Row, Container, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      <Container className="pt-5">
        {test.cartList.length > 0 ? (
          <>
            <Row className="mb-5 align-items-center justify-content-between">
              <Col>
                <h1>Your cart</h1>
              </Col>
              <Col sm={2}>
                <Button className="w-100" onClick={() => test.cleanCart()}>
                  Clean Cart
                </Button>
              </Col>
            </Row>
            <Row><Col sm={8} >
              {test.cartList.map((item) => (
                <>
                  <Row
                    key={item.idItem}
                    className="align-items-center justify-content-start"
                  >
                    <Col sm={2}>
                      <img src={item.imgItem} width="100%" />
                    </Col>
                    <Col sm={4}>
                      <h4 className="mb-0">{item.nameItem}</h4>
                    </Col>
                    <Col sm={2}>
                      <p className="mb-0">Price: </p>
                      <h5 className="mb-0">{parseFloat(item.priceItem).toLocaleString("es", { style: "currency", currency: "USD" })}</h5>
                    </Col>
                    <Col sm={2}>
                      <p className="mb-0">Quantity:</p>
                      <h5 className="mb-0"> {item.quantityItem}</h5>
                    </Col>
                    <Col sm={2}>
                      <Button onClick={() => test.removeOfCart(item.idItem)}>
                        Delete
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                  </>
              ))}</Col>
              <CartTotals subtotal={test.cartSubTotalPrice()} taxes={test.cartTaxes(40)} discount={test.cartDiscount(20)}  />
            </Row>
          </>
        ) : (
          <Alert variant="warning" className="text-center p-5">
            <Alert.Heading className="mb-5">Your cart is empty!</Alert.Heading>
            <Link to="/"><Button variant="warning">Go to shop</Button></Link>
          </Alert>
        )}
      </Container>
    </>
  );
};

export default Cart;
