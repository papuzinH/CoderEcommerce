import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = () => {

    const AddToCart = (quantity) => {
        alert ("Seleccionaste" + quantity + "productos");
    }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13e00e2c-2d8a-4d12-a131-a79ef105e794/air-force-1-shadow-zapatillas-38vS5x.png" />
      <Card.Body>
        <Card.Title>Nike Air Force 1 Shadow</Card.Title>
        <Card.Text>
          $129.00
        </Card.Text>
        <ItemCount stock={5} initial={1} onAdd = {AddToCart}/>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
