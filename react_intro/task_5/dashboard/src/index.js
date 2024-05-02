import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src';
import Notifications from './src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);