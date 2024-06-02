// index.js file
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import uiReducer from './reducers/uiReducer';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

// Initial state of the UI reducer
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
};

// Create the Redux store
const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  preloadedState: {
    ui: Map(initialState),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  enhancers: [composeWithDevTools()],
});

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
