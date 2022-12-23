import styled from 'styled-components';

export const ButtonLoad = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 89, 93, 1) 5%,
    rgba(123, 255, 245, 1) 100%
  );
  border-radius: 15px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 500ms linear;
  text-align: center;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  min-width: 150px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background: linear-gradient(
      0deg,
      rgba(123, 255, 245, 1) 0%,
      rgba(0, 89, 93, 1) 100%
    );
  }
`;
