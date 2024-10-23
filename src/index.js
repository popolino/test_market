import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/reset.css';
import './styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
