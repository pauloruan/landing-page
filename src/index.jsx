import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyles';
import Home from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
);
