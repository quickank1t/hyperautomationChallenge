import React from 'react';

import Navbar from './components/NavBar';

const App = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default App;
