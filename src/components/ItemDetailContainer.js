//Packages
import { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Utils
import { firestoreFetchOne } from "../utils/firebasefetch";

//Components
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  
  const [dato, setDato] = useState([]);

  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then(result => setDato(result))
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      {dato.length != 0 ? (
        <Container>
          <ItemDetail item={dato} />
        </Container>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};

export default ItemDetailContainer;
