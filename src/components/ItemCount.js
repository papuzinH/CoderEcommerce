import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  
console.log(stock, initial, onAdd)

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
      <div className="itemCount mb-3 d-flex justify-content-between p-2">
        <i className="bi bi-dash-lg" onClick={RemoveItem}></i>
        {counter}
        <i className="bi bi-plus-lg" onClick={AddItem}></i>
      </div>
      <div className="d-grid">
        <Button variant="primary" size="lg" onClick={() => onAdd(counter)}>
          Add to cart
        </Button>
      </div>
    </>
  );
};
export default ItemCount;
