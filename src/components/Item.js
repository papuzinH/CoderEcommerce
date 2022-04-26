import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, thumbnail, name, price, stock }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
      <Badge bg="info" className="mb-2">Stock: {stock} </Badge>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{parseFloat(price).toLocaleString("es", { style: "currency", currency: "USD", maximumSignificantDigits: 4 })}</Card.Text>
        <Button variant="primary">
        <Link to={`/item/${id}`}>View details</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
