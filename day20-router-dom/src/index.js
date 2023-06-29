import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Single Page Application
// a single html file
// client side rendering: We update content using JS, instead of requesting a new html

// Multiple Page Application
// Multiple html files

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
