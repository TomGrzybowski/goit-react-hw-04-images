import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ escFunction, src, handleOverlayClick }) => {
  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('keydown', escFunction);
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.removeEventListener('click', handleOverlayClick);
      }
    };
  }, [escFunction, handleOverlayClick]);

  return (
    <div className="overlay">
      <div className="modal">
        <img src={src} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  escFunction: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  handleOverlayClick: PropTypes.func,
};

export default Modal;
