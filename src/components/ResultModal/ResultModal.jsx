import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import classes from './ResultModal.module.css';


const ResultModal = ({msg}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button> */}

      <Modal show={show} onHide={handleClose} className={`${classes["custom-modal"]}`}>
        <Modal.Header closeButton>
          <Modal.Title>{msg}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResultModal;
