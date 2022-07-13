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
                </Col>
                )
                : (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <img width={400} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6409fc47039767.586e69e19a37a.gif" />
                    </div>)}
        </>
    );
}

export default ItemList;