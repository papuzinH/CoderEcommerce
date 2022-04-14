import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddToCartToast({quantity, name}) {
    const [show, setShow] = useState(true);
    return (
          <ToastContainer className="p-3" position="bottom-end">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Body>You've added {quantity} "{name}" to your cart</Toast.Body>
            </Toast>
          </ToastContainer>

    );
  }

  export default AddToCartToast;