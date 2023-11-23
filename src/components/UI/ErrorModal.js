
import ReactDOM from 'react-dom';
import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({ message, onClose }) => {
  const modalRoot = document.getElementById('modal-root');
  
  const handleOverlayClick = (event) => {
    // Check if the click occurred outside the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="error-modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>,
    modalRoot
  );
};

export default ErrorModal;

