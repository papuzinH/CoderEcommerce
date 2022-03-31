import Item from "./Item";

const ItemList = ({items}) => {
    return(
        <>
            {items.length > 0 ? items.map(one_item => <Item key={one_item.id} name={one_item.name} price={one_item.price} thumbnail={one_item.thumbnail} stock={one_item.stock} initial={one_item.initial}/>) : <p>Cargando...</p>}
        </>
    );
}

export default ItemList;