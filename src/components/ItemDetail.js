import ItemCount from "./ItemCount";
import { Row, Col, Badge } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import AddToCartToast from "./AddToCartToast";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, price, stock, photo1, photo2, photo3, description }) => {

    const AddToCart = (quantity) => {
        setitemCounter(quantity);
    }

    const [itemCounter, setitemCounter] = useState(0);

    console.log(itemCounter)

    return (
        <>
            <Row className="py-5">
                <Col>
                    <Carousel interval="3000" variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block m-auto"
                                src={photo1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block m-auto"
                                src={photo2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block m-auto"
                                src={photo3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="py-5">
                    <Row>
                        <Col>
                            <h1>{name}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>{price}</h2>
                        </Col>
                    </Row>
                    <Badge bg="info" className="mb-2">Stock: {stock} </Badge>
                    <Row className="mb-5">
                        <Col>
                            <p>{description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {itemCounter !== 0 ?
                                (<>
                                    <Link to="/cart" className="d-grid gap-2"><Button className="py-4" size="lg">Go to cart</ Button></Link>
                               
                                    <AddToCartToast  quantity={itemCounter} name={name} />
                                </>)
                                : <ItemCount stock={parseInt(stock)} initial={itemCounter} onAdd={AddToCart} />
                            }



                        </Col>
                    </Row>

                </Col>
            </Row>

        </>



        // <Card style={{ width: "18rem" }}>
        //   <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13e00e2c-2d8a-4d12-a131-a79ef105e794/air-force-1-shadow-zapatillas-38vS5x.png" />
        //   <Card.Body>
        //     <Card.Title>Nike Air Force 1 Shadow</Card.Title>
        //     <Card.Text>
        //       $129.00
        //     </Card.Text>
        //     <ItemCount stock={5} initial={1} onAdd = {AddToCart}/>
        //   </Card.Body>
        // </Card>
    );
};

export default ItemDetail;
