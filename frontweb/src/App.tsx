import React from 'react';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import GlobalStyles from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Diego' }}>
        <Signin />
      </AuthContext.Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
