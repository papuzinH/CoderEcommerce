import CheckoutForm from '../components/CheckoutForm'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; import {
    collection,
    doc,
    setDoc,
    serverTimestamp,
    updateDoc,
    increment,
} from "firebase/firestore";
import { Col, Row, Container, Button } from "react-bootstrap";
//Utils
import db from "../utils/firebaseconfig";

import CartTotals from '../components/CartTotals';

import ModalMessage from '../components/ModalMessage';



const Checkout = () => {
    //Traigo el estado del carrito:
    const cart = useContext(CartContext);

    //Primero traigo los datos del usuario:
    const placeOrder = async (buyerData) => {

        try {
            const itemsForDB = cart.cartList.map((item) => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.priceItem,
                quantity: item.quantityItem
            }));

            cart.cartList.forEach(async (item) => {
                const itemRef = doc(db, "products", item.idItem);
                await updateDoc(itemRef, {
                    stock: increment(-item.quantityItem),
                });
            });


            const order = {
                buyer: buyerData,
                products: itemsForDB,
                date: serverTimestamp(),
                total: cart.cartSubTotalPrice() + cart.cartTaxes(40) - cart.cartDiscount(20),
            };

            const createOrderInFirestore = async () => {
                // Add a new document with a generated id

                const newOrderRef = doc(collection(db, "orders"));
                await setDoc(newOrderRef, order);
                return newOrderRef;
            };

            createOrderInFirestore()
                .then((result) => {
                    handleShow();
                    setModalText(result.id)
                })
                .catch((err) => console.log(err));

            cart.cleanCart();
        } catch (error) {
            console.log(error);
        }
    };

    const [show, setShow] = useState(false);
    const [modalText, setModalText] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ModalMessage handleClose={handleClose} handleFunction={cart.cleanCart} show={show} text={modalText} />

            <Container className="checkout_form py-5">
                <Row>
                    <Col sm={8}>
                        <h1 className='text-center mb-4'>Enter your billing information</h1>
                        <CheckoutForm handleSubmit={placeOrder} />
                    </Col>
                    <CartTotals
                        subtotal={cart.cartSubTotalPrice()}
                        taxes={cart.cartTaxes(40)}
                        discount={cart.cartDiscount(20)}
                    />
                </Row>

            </Container>

        </>
    )
}

export default Checkout