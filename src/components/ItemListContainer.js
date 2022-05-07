//Packages
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Utils
import { firestoreFetch } from "../utils/firebasefetch";

//Components
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [datos, setDatos] = useState([]);

  const { idCategory } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
        setLoading(true)
    },2000)
  }, [idCategory]); //Importante la dependencia del useEffect para que se ejecute cuando "datos" es modificado.

  return (
    <Container id="itemlist" className="py-5">
      {loading==true ? <h1 className="pb-2 fst-italic fw-bold text-uppercase">Our Products</h1> : ""}
      <Row className="g-3">
        <ItemList items={datos} />
      </Row>
    </Container>
  );
};

export default ItemListContainer;
