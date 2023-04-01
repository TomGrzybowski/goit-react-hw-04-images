import { Component } from 'react';
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
          alt={image.tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  galleryItems: PropTypes.array,
  pages: PropTypes.number,
};
// class ImageGallery extends Component {
//   static defaultProps = {
//     galleryItems: [],
//     pages: 0,
//   };

//   static propTypes = {
//     galleryItems: PropTypes.array,
//     pages: PropTypes.number,
//   };

//   render() {
//     return (
//       <ul className="image-gallery" onClick={this.props.handleImageClick}>
//         {this.props.galleryItems.map(image => (
//           <ImageGalleryItem
//             key={image.id}
//             id={image.id}
//             src={image.webformatURL}
//             alt={image.tags}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

export default ImageGallery;
