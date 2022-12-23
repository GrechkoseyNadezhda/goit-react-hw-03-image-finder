import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #fff;
  background: linear-gradient(
    0deg,
    rgba(0, 89, 93, 1) 5%,
    rgba(123, 255, 245, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border-radius: 15px;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/751/751463.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchBtnSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 15px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
