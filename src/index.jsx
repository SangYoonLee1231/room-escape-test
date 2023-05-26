import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/GlobalStyle';
import variables from './styles/variables';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ variables }}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);

reportWebVitals();
