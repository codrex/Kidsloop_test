import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from './theme';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
