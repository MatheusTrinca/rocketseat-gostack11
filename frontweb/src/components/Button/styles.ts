import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #ff9000;
  color: #312e38;
  border-radius: 10px;
  height: 56px;
  display: block;
  width: 100%;
  border: 0;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
