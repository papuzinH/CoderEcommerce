import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseconfig';

export const firestoreFetch = async (idCategory) => {
    //Creo variable para almacenar la colección
    let storecollection;
    //Si hay idCategory, traer esa coleccion. Sino, traer todas.
    if (idCategory) {
        storecollection = query(collection(db, "products"), where('idCategory', '==', idCategory));
    } else {
        storecollection = query(collection(db, "products"), orderBy('name'));
    }
    //Obtengo la data de la coleccion
    const getCollection = await getDocs(storecollection);
    //La mapeo y les agrego un id
    const dataCollection = getCollection.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataCollection;
}

export const firestoreFetchOne = async (idItem) => {
    //Obtengo la coleccion segun mi Iditem
    const storeItem = doc(db, "products", idItem);
    //Traigo la data de la coleccion
    const getItem = await getDoc(storeItem);
    
    //Si existe, traigo el producto. Sino, error
    if (getItem.exists()) {
      return {
          id: idItem,
          ...getItem.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("The product you are trying to search doesn't exist. Try again");
    }
}