//Packages
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Utils
import { firestoreFetch } from "../utils/firebasefetch";

//Components
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [datos, setDatos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {

    firestoreFetch(idCategory)
      .then(result => setDatos(result))
      .catch(err => console.log(err));

  }, [idCategory]); //Importante la dependencia del useEffect para que se ejecute cuando "datos" es modificado.

  return (
    <Container className="pt-5">
      <Row className="g-3">
        <ItemList items={datos} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
