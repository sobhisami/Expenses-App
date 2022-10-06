import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Component/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resource/css/custom.css';
import { ONContactHandle } from './Contact/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ONContactHandle>
    <App />
  </ONContactHandle>
);
