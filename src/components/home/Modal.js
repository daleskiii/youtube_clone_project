import React from "react";
// import "./Modal.css";
import Modal from "react-modal";

function ModalComponent({ error, closeModal, modal }) {
  // const [modal, setModal]= useState(true)

  // const toggleModal = () => {
  //     setModal(!Modal)
  // }

  return (
    //     <>
    //     {modal && (
    <div className="modal">
      <Modal isOpen={modal}>
        <div className="overlay">
          <div className="modal-content">
            <h2>Error Found</h2>
            <p>{error}</p>
          </div>
        </div>
        <button className="close-modal" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>

    //   )}
    //     </>
  );
}

export default ModalComponent;
