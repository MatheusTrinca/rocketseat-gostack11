import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #232129;
  border: 2px solid #232129;
  padding: 16px;
  color: #f4ede8;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input {
    background-color: transparent;
    border: 0;
    color: #f4ede8;

    & + input {
      margin-top: 8px;
    }

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
    color: #666360;
  }
`;
