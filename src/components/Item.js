import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, thumbnail, name, price, stock }) => {
  return (
    <Card style={{ width: "18rem" }} className="overflow-hidden shadow">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body className="bg-dark">
        <Badge bg="warning" className="mb-2">Stock: {stock} </Badge>
        <Card.Title className="text-light">{name}</Card.Title>
        <Card.Text className="text-light">{parseFloat(price).toLocaleString("es", { style: "currency", currency: "USD", maximumSignificantDigits: 4 })}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="danger" className="item-btn">
            View details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
