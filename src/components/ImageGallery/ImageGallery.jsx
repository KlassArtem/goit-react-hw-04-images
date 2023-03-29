import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ imgList, onClick }) => {
  
  if (imgList.length === 0) {
    return null;
  }

  return (
    <GalleryList>
      {imgList.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryItem key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
          />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired, 
};
