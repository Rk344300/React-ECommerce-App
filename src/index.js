import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@mui/material'
import App from './App';
import products from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(products);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
