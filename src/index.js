import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FetchContextProvider } from './contexts/FetchContext/FetchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchContextProvider>
      <App />
    </FetchContextProvider>
  </React.StrictMode>
);