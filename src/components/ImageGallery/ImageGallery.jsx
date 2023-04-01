import ImageGalleryItem from './ImageGalleryItem.jsx';
import PropTypes from 'prop-types';

const ImageGallery = ({ galleryItems = [], handleImageClick }) => {
  return (
    <ul className="image-gallery" onClick={handleImageClick}>
      {galleryItems.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          src={image.webformatURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.array,
  pages: PropTypes.number,
};

export default ImageGallery;
