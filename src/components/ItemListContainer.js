import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import customFetch from "../data/customfetch";
import { shoes } from "../data/shoes";
import { Container, Row, Col } from "react-bootstrap";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch(2000, shoes)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);

  console.log(shoes);

  return (
    <Container>
        <Row>
          <ItemList items={datos} />
        </Row>
    </Container>
  );
};

export default ItemListContainer;
