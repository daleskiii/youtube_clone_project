import React from "react";
import Modal from "react-modal";

function ModalComponent({ error, closeModal, modal }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="container">
      <Modal isOpen={modal} style={customStyles} onRequestClose={closeModal}>
        <button className="btn btn-danger pull-right" onClick={closeModal}>
          x
        </button>
        <h2>Error Found</h2>
        <p>{error}</p>
      </Modal>
    </div>
  );
}

export default ModalComponent;
