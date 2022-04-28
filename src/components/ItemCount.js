//Packages
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const AddItem = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const RemoveItem = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className=" itemCount mb-3 d-flex justify-content-between p-2">
        <i className="bi bi-dash-lg" onClick={RemoveItem}></i>
        {counter}
        <i className="bi bi-plus-lg" onClick={AddItem}></i>
      </div>
      <div className="d-grid">
        <Button
          className="shadow item-btn"
          variant="danger"
          size="lg"
          onClick={() => onAdd(counter)}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ItemCount;
