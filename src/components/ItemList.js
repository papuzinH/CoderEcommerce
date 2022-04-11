import Item from "./Item";
import { Col, Spinner } from "react-bootstrap";

const ItemList = ({items}) => {
    return(
        <>
            {items.length > 0 ? items.map(one_item =><Col><Item id={one_item.id} name={one_item.name} price={one_item.price} thumbnail={one_item.thumbnail} stock={one_item.stock} initial={one_item.initial}/></Col>) : <Spinner animation="border" variant="primary" />}
        </>
    );
}

export default ItemList;