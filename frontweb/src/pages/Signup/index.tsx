import React from 'react';
import { Background, Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GO Barber" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="email" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="text"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="create">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
