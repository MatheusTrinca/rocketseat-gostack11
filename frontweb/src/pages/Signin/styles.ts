import styled from 'styled-components';
import signinBackground from '../../assets/login_background.png';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 340px;
    text-align: center;
    margin: 80px 0;

    h1 {
      color: #f4ede8;
      font-size: 24px;
      margin-bottom: 16px;
    }

    a {
      font-size: 16px;
      color: #f4ede8;
      margin-top: 24px;
      text-decoration: none;
      display: block;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  & > a {
    color: #ff9000;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signinBackground}) no-repeat center;
  background-size: cover;
`;
