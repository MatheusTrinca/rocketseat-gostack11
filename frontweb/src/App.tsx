import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
