import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, onImgClick }) => {
  return (
    <List>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            photo={photo}
            onImgClick={onImgClick}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImgClick: PropTypes.func.isRequired,
};
