import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import customFetch from "../data/customfetch";
import { shoes } from "../data/shoes";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const [datos, setDatos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory == undefined) {
      customFetch(2000, shoes)
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    }else{
      customFetch(2000, shoes.filter(item => item.idCategory == parseInt(idCategory)))
        .then((result) => setDatos(result))
        .catch((err) => console.log(err));
    }

    console.log(idCategory);
  }, [idCategory]); //Importante la dependencia del useEffect para que se ejecute cuando "datos" es modificado.

  return (
    <Container>
      <Row>
        <ItemList items={datos} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
