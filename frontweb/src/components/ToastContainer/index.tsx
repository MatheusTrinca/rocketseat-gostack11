import React from 'react';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },

    message => message.id,
  );
  return (
    <Container>
      {messageWithTransitions.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
