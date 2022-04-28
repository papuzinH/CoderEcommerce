//Packages
import { Col, Spinner } from "react-bootstrap";

//Components
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            {items.length > 0 ? items.map(one_item =>
                <Col key={one_item.id} xs={12} md={6} lg={3}>
                    <Item
                        id={one_item.id}
                        name={one_item.name}
                        price={one_item.price}
                        thumbnail={one_item.thumbnail}
                        stock={one_item.stock}
                        brand={one_item.brand} />
                </Col>)
                :
                <Spinner animation="border" variant="primary" />}
        </>
    );
}

export default ItemList;