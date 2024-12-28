import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: Your global CSS file
import App from './App'; // Your main app component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This should match the id in index.html
);
