import { Card, Button, Badge } from "react-bootstrap";

const Item = ({ thumbnail, name, price, stock, initial }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
      <Badge bg="info" className="mb-2">Stock: {stock} </Badge>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">
          View details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
