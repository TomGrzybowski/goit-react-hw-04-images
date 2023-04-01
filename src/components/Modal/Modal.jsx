import { Component, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ escFunction, src, alt, handleOverlayClick }) => {
  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('keydown', escFunction);
      const overlay = document.querySelector('.overlay');
      overlay.removeEventListener('click', handleOverlayClick);
    };
  }, []);

  return (
    <div className="overlay">
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  escFunction: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
};

// class Modal extends Component {
//   static propTypes = {
//     escFunction: PropTypes.func,
//     src: PropTypes.string,
//     alt: PropTypes.string,
//   };

//   componentDidMount() {
//     document.addEventListener('keydown', this.props.escFunction);
//     const overlay = document.querySelector('.overlay');

//     overlay.addEventListener('click', this.props.handleOverlayClick);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.props.escFunction);
//     const overlay = document.querySelector('.overlay');
//     overlay.removeEventListener('click', this.props.handleOverlayClick);
//   }

//   render() {
//     return (
//       <div className="overlay">
//         <div className="modal">
//           <img src={this.props.src} alt={this.props.alt} />
//         </div>
//       </div>
//     );
//   }
// }

export default Modal;
