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
          <ItemDetail id={dato.id} name={dato.name} price={dato.price} stock={dato.stock} initial={dato.initial} photo1={dato.photo1} photo2={dato.photo2} photo3={dato.photo3} description={dato.description} />
        </Container>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};

export default ItemDetailContainer;
