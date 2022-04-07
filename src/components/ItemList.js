import Item from "./Item";
import { Col } from "react-bootstrap";

const ItemList = ({items}) => {
    return(
        <>
            {items.length > 0 ? items.map(one_item =><Col><Item key={one_item.id} name={one_item.name} price={one_item.price} thumbnail={one_item.thumbnail} stock={one_item.stock} initial={one_item.initial}/></Col>) : <p>Cargando...</p>}
        </>
    );
}

export default ItemList;