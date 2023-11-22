// ErrorModal.js

import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({ message, onClose }) => {
  const handleOverlayClick = (event) => {
    // Check if the click occurred outside the modal content
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="error-modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ErrorModal;

