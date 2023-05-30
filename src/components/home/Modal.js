import React from 'react'
// import "./Modal.css";

function Modal({error}) {

    // const [modal, setModal]= useState(true)

    // const toggleModal = () => {
    //     setModal(!Modal)
    // }

  return (
//     <>
//     {modal && (
    <div className='modal'>
        <div className='overlay'>
            <div className='modal-content'>
                <h2>Error Found</h2>
                <p>{error}</p>
                <button 
                className='close-modal'
                // onClick={toggleModal}
                >Close</button>
            </div>
        </div>
    </div>
//   )}
//     </>
  )
  

}

export default Modal