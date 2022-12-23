import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <ButtonLoad type="button" onClick={loadMore}>
      Load more
    </ButtonLoad>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
