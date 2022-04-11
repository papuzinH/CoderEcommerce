import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, thumbnail, name, price, stock, initial }) => {
  console.log(id)
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
      <Badge bg="info" className="mb-2">Stock: {stock} </Badge>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">
        <Link to={`/item/${id}`}>View details</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
