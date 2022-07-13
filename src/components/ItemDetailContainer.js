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
    window.scrollTo(0, 0);
    const getData = async() => {
      await firestoreFetchOne(idItem)
      .then(result => setDato(result))
      .catch(err => console.log(err))
    }
    getData();
      
  }, []);

  return (
    <>
      {dato.length != 0 ? (
        <Container className="py-5">
          <ItemDetail item={dato} />
        </Container>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <img width={400}  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6409fc47039767.586e69e19a37a.gif" />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
