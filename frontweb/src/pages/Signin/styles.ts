import styled from 'styled-components';
import signinBackground from '../../assets/login_background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f4ede8;
    font-size: 24px;
  }

  form {
    // 3 - 11:30
    text-align: center;
  }

  input {
    width: 100%;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signinBackground}) no-repeat center;
  background-size: cover;
`;
