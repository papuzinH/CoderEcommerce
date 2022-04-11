import ItemCount from "./ItemCount";
import { Row, Col, Badge } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { Carousel } from "react-bootstrap";

const ItemDetail = ( {id, name, price, stock, initial, photo1, photo2, photo3, description} ) => {

    const AddToCart = (quantity) => {
        alert("Seleccionaste " + quantity + " productos");
    }


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
                    <Row>
                        <Col>
                            <p>{description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ItemCount stock={parseInt(stock)} initial={parseInt(initial)} onAdd={AddToCart} />
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
