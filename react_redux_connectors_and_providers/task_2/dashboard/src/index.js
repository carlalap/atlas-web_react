// index.js file
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import uiReducer from './reducers/uiReducer';


// Create a Redux store using Redux Toolkit
const store = configureStore({
  reducer: {
    ui: uiReducer,
    // task 7. Importing redux-thunk in the index.js file, apply the middleware in the store
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default store;