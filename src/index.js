import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderwithNavigate from './auth/auth0-provider-with-navigate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0ProviderwithNavigate>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0ProviderwithNavigate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

