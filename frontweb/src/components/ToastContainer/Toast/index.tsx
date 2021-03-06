import React, { useEffect } from 'react';
import { Container } from './styles';
import { useToast, ToastMessage } from '../../../hooks/toast';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

interface ToastProps {
  message: ToastMessage;
  style: any; //eslint-disable-line
}

const icons = {
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
  info: <FiInfo size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      key={message.id}
      type={message.type}
      style={style}
      hasDescription={!!message.description}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
