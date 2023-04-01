// @ts-nocheck
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import { useEffect, useState } from 'react';
import Button from './Button/Button.jsx';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Modal from './Modal/Modal.jsx';

const KEY = '33185043-dc389dc3b605958bff2737f65';

const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalImageSource, setModalImageSource] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const fetchPictures = async url => {
    const pictures = await fetch(url);
    const picturesJson = await pictures.json();
    return picturesJson.hits;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    Loading.standard({ svgColor: '#3f51b5' });

    const page = 1;
    const input = event.target[1]['value'];
    const URL = `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    const pictures = await fetchPictures(URL);

    setGalleryItems(pictures);
    setCurrentInput(input);
    setPages(page);
  };

  const handleLoadMore = async () => {
    // event.prefentDefault();
    Loading.standard({ svgColor: '#3f51b5' });
    const prevGalleryItems = galleryItems;
    const page = pages + 1;
    const input = currentInput;

    const URL = `https://pixabay.com/api/?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const newPictures = await fetchPictures(URL);

    setGalleryItems([...prevGalleryItems, ...newPictures]);
    setPages(page);
  };

  useEffect(() => {
    Loading.remove();
  });

  const handleImageClick = event => {
    const id = event.target.id;

    const pictureObject = galleryItems.find(
      element => element.id === Number(id)
    );

    setIsModalShown(true);
    setModalImageSource(pictureObject.largeImageURL);
  };

  const escFunction = event => {
    if (event.key === 'Escape') {
      setIsModalShown(false);
    }
  };

  const handleOverlayClick = event => {
    if (event.target.classList.contains('overlay')) {
      setIsModalShown(false);
    }
  };

  const isGalleryItemsShown = galleryItems['length'] === 0 ? false : true;

  return (
    <>
      {isModalShown ? (
        <Modal
          src={modalImageSource}
          alt={modalAlt}
          handleOverlayClick={handleOverlayClick}
          escFunction={escFunction}
        />
      ) : (
        <></>
      )}
      <Searchbar handleSubmit={handleSubmit} />

      <ImageGallery
        galleryItems={galleryItems}
        handleImageClick={handleImageClick}
      />

      {isGalleryItemsShown ? <Button handleLoadMore={handleLoadMore} /> : <></>}
    </>
  );
};

export default App;
