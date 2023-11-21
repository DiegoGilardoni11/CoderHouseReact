import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App';
import './index.css';

const root = document.getElementById('root') || document.createElement('div');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
reportWebVitals();


