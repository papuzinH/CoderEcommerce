//Packages
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Badge, Carousel, Button } from "react-bootstrap";

//Contexts
import { CartContext } from "../context/CartContext";

//Components
import ItemCount from "./ItemCount";
import Toast from "./Toast";

const ItemDetail = ({ item }) => {

  const cart = useContext(CartContext);

  const AddToCart = (quantity) => {
    setitemCounter(quantity);
    cart.addToCart(item, quantity);
  };

  const [itemCounter, setitemCounter] = useState(0);

  return (
    <>
      <Row className="py-5">
        <Col>
          <Carousel className="item-detail-carousel overflow-hidden shadow" interval="3000" variant="dark">
            {item.photos.map((one_photo) => (
              <Carousel.Item>
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
          <Row className="mb-5">
            <Col>
              <p>{item.description}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {itemCounter !== 0 ? (
                <>
                  <Link to="/cart" className="d-grid gap-2">
                    <Button variant="danger" className="py-4" size="lg">
                      Go to cart
                    </Button>
                  </Link>

                  <Toast text={"You've added " + itemCounter + " " + item.name.toUpperCase() + " to your cart."} quantity={itemCounter} name={item.name} />
                </>
              ) : (
                <ItemCount
                  stock={parseInt(item.stock)}
                  initial={itemCounter}
                  onAdd={AddToCart}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>

  );
};

export default ItemDetail;
