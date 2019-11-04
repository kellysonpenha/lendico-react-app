import React from 'react';
import 'babel-polyfill';

import Routes from './routes';
import { GlobalStyle } from './styles';

const App = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default App;
