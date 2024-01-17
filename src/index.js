import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

