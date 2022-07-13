//Packages
import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

//Contexts
import { CartContext } from "../context/CartContext";

const ModalMessage = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thank you for your purchase!</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is your order ID: {props.text}</Modal.Body>
            <Modal.Footer>
                <Link to="/">
                    <Button className="text-uppercase m-auto" variant="primary" size="lg">
                        Go to shop
                    </Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMessage