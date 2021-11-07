import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import GlobalStyles from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Signin />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
