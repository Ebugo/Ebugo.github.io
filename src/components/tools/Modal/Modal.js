import React from 'react';
import './Modal.css';


const Modal = (props) => {
    let timeout = null;

    const handleModalClose = (e) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            props.onSelectModal(false)
        }, 200);

    }
    return (
        <div className="modal-sty">
            <div className="modal-body">
                <div className="modal-title">
                    <h5>{props.title}</h5>
                </div>
                <div className="modal-middle">
                    <p>{props.info}</p>
                </div>
                <div className="modal-footer m-0 p-1">
                    <button onClick={handleModalClose} type="submit" className="btn btn-outline-primary col-6 col-md-4 col-lg-3">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;