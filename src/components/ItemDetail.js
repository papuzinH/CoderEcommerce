//Packages
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Badge, Carousel, Button, Form } from "react-bootstrap";
import { HideUntilLoaded } from 'react-animation'
import { Toast, ToastContainer } from 'react-bootstrap'

//Contexts
import { CartContext } from "../context/CartContext";

//Components
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {

  const cart = useContext(CartContext);
  const [itemCounter, setitemCounter] = useState(0);
  const [size, setSize] = useState(0);
  const [show, setShow] = useState(false);

  const AddToCart = (quantity) => {
    setShow(true);
    setitemCounter(quantity);
  };

  const AddToCartReal = (quantity, size) => {
    cart.addToCart(item, quantity, size);
  };

  useEffect(() => {
    if (itemCounter != 0 && size != 0) {
      AddToCartReal(itemCounter, size)
    }
  }, [itemCounter, size])


  return (
    <><HideUntilLoaded imageToLoad={item.photos}>
      <Row className="py-5 vh-100">
        <Col className="align-self-center">
          <Carousel className="item-detail-carousel overflow-hidden shadow" interval="3000" variant="dark">
            {item.photos.map((one_photo, index) => (
              <Carousel.Item key={index}>
                <img className="d-block m-auto" src={one_photo} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col className="py-5 align-self-center">
          <Row>
            <Col>
              <h1 className="text-uppercase fst-italic fw-bold">{item.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>
                {parseFloat(item.price).toLocaleString("es", {
                  style: "currency",
                  currency: "USD",
                  maximumSignificantDigits: 4,
                })}
              </h2>
            </Col>
          </Row>
          <Badge bg="warning" className="mb-2">
            Stock: {item.stock}{" "}
          </Badge>
          <Badge bg="danger" className="ms-2">
            {item.brand.toUpperCase()}
          </Badge>
          <Row className="mb-2">
            <Col>
              <p>{item.description}</p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    {item.sizes.map((one_size) => {
                      return (<Form.Check
                        inline
                        label={one_size}
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onClick={() => { setSize(one_size); }}
                      />)
                    })}
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              
                <ItemCount
                  stock={parseInt(item.stock)}
                  initial={itemCounter}
                  onAdd={AddToCart}
                />
              
            </Col>
          </Row>
        </Col>
      </Row>
      <ToastContainer className="p-3 mt-5" position="top-end">
        <Toast bg='warning' onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>{"You've added " + itemCounter + " " + item.name.toUpperCase() + " to your cart."}</Toast.Body>
        </Toast>
      </ToastContainer>
    </HideUntilLoaded>
    </>

  );
};

export default ItemDetail;
