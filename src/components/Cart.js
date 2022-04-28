//Packages
import { useContext } from "react";
import { Col, Row, Container, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";


//Contexts
import { CartContext } from "../context/CartContext";

//Components
import CartTotals from "./CartTotals";

const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <Container className="pt-5">
        {cart.cartList.length > 0 ? (
          <>
            <Row className="mb-5 align-items-center justify-content-between">
              <Col>
                <h1>Your cart</h1>
              </Col>
              <Col sm={2}>
                <Button className="w-100" onClick={() => cart.cleanCart()}>
                  Clean Cart
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                {cart.cartList.map((item) => (
                  <>
                    <Row
                      key={item.idItem}
                      className="align-items-center justify-content-start"
                    >
                      <Col sm={2}>
                        <img src={item.imgItem} width="100%" />
                      </Col>
                      <Col sm={4}>
                        <h4 className="mb-0 product-name">{item.nameItem}</h4>
                      </Col>
                      <Col sm={2}>
                        <p className="mb-0">Price: </p>
                        <h5 className="mb-0">
                          {parseFloat(item.priceItem).toLocaleString("es", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </h5>
                      </Col>
                      <Col sm={2}>
                        <p className="mb-0">Quantity:</p>
                        <h5 className="mb-0"> {item.quantityItem}</h5>
                      </Col>
                      <Col sm={2}>
                        <i
                          onClick={() => cart.removeOfCart(item.idItem)}
                          class="bi bi-x-circle-fill text-danger"
                        ></i>
                      </Col>
                    </Row>
                    <hr />
                  </>
                ))}
              </Col>
              <CartTotals
                subtotal={cart.cartSubTotalPrice()}
                taxes={cart.cartTaxes(40)}
                discount={cart.cartDiscount(20)}
              />
            </Row>
          </>
        ) : (
          <Alert variant="dark" className="text-center p-5">
            <Alert.Heading className="mb-5">Your cart is empty!</Alert.Heading>
            <Link to="/">
              <Button>Go to shop</Button>
            </Link>
          </Alert>
        )}
      </Container>
    </>
  );
};

export default Cart;
