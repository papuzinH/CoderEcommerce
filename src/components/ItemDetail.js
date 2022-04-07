import ItemCount from "./ItemCount";
import { Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { Carousel } from "react-bootstrap";

const ItemDetail = ({ item }) => {

    const AddToCart = (quantity) => {
        alert("Seleccionaste " + quantity + " productos");
    }

    return (
        <>

            <Row className="py-5">
                <Col>
                    <Carousel interval="3000">
                        <Carousel.Item>
                            <img
                                className="d-block m-auto"
                                src="https://www.digitalsport.com.ar/files/products/621e4f8717255-547661-500x500.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block m-auto"
                                src="https://www.digitalsport.com.ar/files/products/621e4f88eb5ee-547661-500x500.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block m-auto"
                                src="https://www.digitalsport.com.ar/files/products/621e4f89d9fc8-547661-500x500.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="py-5">
                    <Row>
                        <Col>
                            <h1>{item.name}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Con sus líneas simples, el look de atletismo tradicional y, por supuesto, la amortiguación Air visible, el Nike Air Max SC es el toque final perfecto para cualquier atuendo. La mezcla rica de materiales agrega profundidad, a la vez que lo convierte en un calzado duradero y ligero para el día a día.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ItemCount stock={5} initial={1} onAdd={AddToCart} />
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
