import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../data/customfetch";
import { shoes } from "../data/shoes";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);

  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      shoes.find((one_shoe) => one_shoe.id == parseInt(idItem))
    )
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return (
    <>
      {dato.length != 0 ? (
        <Container>
          <ItemDetail item = {dato} />
        </Container>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};

export default ItemDetailContainer;
