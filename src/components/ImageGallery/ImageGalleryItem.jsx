import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, id }) => {
  return (
    <li>
      <img src={src} id={id}></img>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
};

export default ImageGalleryItem;
