import React from 'react';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GO Barber" />
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
