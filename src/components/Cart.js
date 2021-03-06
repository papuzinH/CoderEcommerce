//Packages
import { useContext, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Contexts
import { CartContext } from "../context/CartContext";

//Components
import CartTotals from "./CartTotals";
import ModalConfirmation from "./ModalConfirmation";

const Cart = () => {

  const cart = useContext(CartContext);
  const [showClean, setShowClean] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [modalText, setModalText] = useState("")
  const handleCloseClean = () => setShowClean(false);
  const handleShowClean = () => setShowClean(true);

  return (
    <>
      <ModalConfirmation handleClose={handleCloseClean} handleFunction={cart.cleanCart} show={showClean} text={modalText} />
      {cart.cartList.length > 0 ? (
        <>
          <Container id="cartlist" className="py-5 vh-100">
            <Row className="mb-5 align-items-center justify-content-between">
              <Col>
                <h1 className="fw-bold fst-italic text-uppercase">Your cart</h1>
              </Col>
              <Col sm={2}>
                <Button className="w-100 text-uppercase" onClick={() => { handleShowClean(); setModalText("Do you want to delete all the products from your Cart?") }}>
                  Clean Cart
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                {cart.cartList.map((item, index) => (
                  <div key={index}>
                    <Row
                      key={item.idItem}
                      className="align-items-center justify-content-start"
                    >
                      <Col sm={2}>
                        <img src={item.imgItem} width="100%" />
                      </Col>
                      <Col sm={4}>
                        <h4 className="mb-0 product-name text-uppercase">{item.nameItem}</h4>
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
                      <Col sm={1}>
                        <p className="mb-0">Size:</p>
                        <h5 className="mb-0"> {item.sizeItem}</h5>
                      </Col>
                      <Col sm={1}>
                        <i
                          onClick={() => {cart.removeOfCart(item.idItem, item.sizeItem);}}
                          className="bi bi-x-circle-fill text-danger"
                        ></i>
                      </Col>
                    </Row>
                    <hr />
                  </div>
                ))}
              </Col>
              <CartTotals
              showBtn = {true}
                subtotal={cart.cartSubTotalPrice()}
                taxes={cart.cartTaxes(40)}
                discount={cart.cartDiscount(20)}
              />
            </Row>
          </Container>
        </>
      ) : (
        <Container className="vh-100 d-flex justify-content-center align-items-center flex-column">
          <h1 className="mb-4">Your Cart is empty!</h1>
          <Link to="/">
            <Button className="text-uppercase">Go to shop</Button>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Cart;
