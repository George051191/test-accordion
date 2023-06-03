/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { MulishFonts, GlobalStyles, Roboto } from './vendor';
import App from './components/App/App';

const rootDiv = document.getElementById('root');
const rootNode = createRoot(rootDiv as Element);

rootNode.render(
  <React.StrictMode>
    <GlobalStyles />
    <Roboto />
    <MulishFonts />

    <App />

  </React.StrictMode>,
);
