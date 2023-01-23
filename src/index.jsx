import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';
import { HelmetProvider } from 'react-helmet-async';
import { AuthContextProvider } from './app/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContextProvider>
  </HelmetProvider>
);
