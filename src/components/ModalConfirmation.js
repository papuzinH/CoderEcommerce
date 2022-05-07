//Packages
import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap"

//Contexts
import { CartContext } from "../context/CartContext";

const ModalConfirmation = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Wait a second!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.text}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="bg-danger border-danger" onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => { props.handleFunction(props.idItem); props.handleClose() }}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalConfirmation