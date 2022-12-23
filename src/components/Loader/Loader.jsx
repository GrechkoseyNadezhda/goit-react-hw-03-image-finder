import React from 'react';
import { LoaderStyle } from './Loader.styled';
import { Overlay } from '../Modal/Modal.styled';

export const Loader = () => {
  return (
    <Overlay>
      <LoaderStyle />
    </Overlay>
  );
};
