import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import customFetch from "../data/customfetch";
import { shoes } from "../data/shoes";
import { Container} from "react-bootstrap";

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);

  useEffect(() => {
    customFetch(2000, shoes[0])
      .then((result) => setDato(result))
      .catch((err) => console.log(err));
  }, []);


  return (
    <Container>
        <ItemDetail item={dato} />
    </Container>
  );
};

export default ItemDetailContainer;