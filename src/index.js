import React, { StrictMode } from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from './routes/App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
//const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
