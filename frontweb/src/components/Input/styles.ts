import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<InputProps>`
  width: 100%;
  border-radius: 10px;
  background-color: #232129;
  color: #666360;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  border: 2px solid #232129;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;
    `}

  input {
    background-color: transparent;
    border: 0;
    color: #f4ede8;

    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}
  }
`;
