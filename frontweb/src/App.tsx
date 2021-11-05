import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Signin />
      <GlobalStyles />
    </>
  );
};

export default App;
