import styled, { keyframes } from 'styled-components';
import signupBackground from '../../assets/signup_background.png';
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
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

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
    color: #f4ede8;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 20px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signupBackground}) no-repeat center;
  background-size: cover;
`;
