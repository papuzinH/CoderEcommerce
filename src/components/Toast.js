import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useState } from 'react';

function AddToast({text}) {
    const [show, setShow] = useState(true);
    return (
          <ToastContainer className="p-3 mt-5" position="top-end">
            <Toast bg='warning' onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Body>{text}</Toast.Body>
            </Toast>
          </ToastContainer>

    );
  }

  export default AddToast;