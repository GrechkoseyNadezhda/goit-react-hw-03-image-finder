import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ photo, onImgClick }) => {
  return (
    <Item onClick={() => onImgClick(photo.largeImageURL)}>
      <Image src={photo.webformatURL} alt={photo.tags} />
    </Item>
  );
};

ImageGalleryItem.prototype = {
  photo: PropTypes.objectOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
