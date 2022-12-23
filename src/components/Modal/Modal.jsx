import PropTypes from 'prop-types';
import { Component } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onImgClick('');
    }
  };

  handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onImgClick('');
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdrop}>
        <ModalStyle>
          <img src={this.props.largeImg} alt="Modal img" />
        </ModalStyle>
      </Overlay>
    );
  }
}

Modal.propType = {
  largeImg: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
