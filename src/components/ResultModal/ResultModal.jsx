import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Wrapper from '../Helpers/Wrapper';
import classes from './ResultModal.module.css';


const ResultModal = ({msg,bet, resetBudget = false}) => {
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
          {resetBudget && <Modal.Title>Reset Budget Successfully</Modal.Title>}
          {!resetBudget && <Wrapper><Modal.Title>{msg}</Modal.Title></Wrapper>}
          
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ResultModal;
