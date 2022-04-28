import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import customFetch from "../data/customfetch";
import { shoes } from "../data/shoes";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firebasefetch";

const ItemListContainer = () => {

  const [datos, setDatos] = useState([]);

  const { idCategory } = useParams();
  

  useEffect(() => {

    firestoreFetch(idCategory)
      .then(result => setDatos(result))
      .catch(err => console.log(err));

  }, [idCategory]); //Importante la dependencia del useEffect para que se ejecute cuando "datos" es modificado.

  console.log(datos)
  return (
    <Container className="pt-5">
      <Row>
        <ItemList items={datos} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
