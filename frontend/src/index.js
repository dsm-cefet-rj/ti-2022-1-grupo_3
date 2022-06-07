import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchProducts } from './ProductsSlice';
import { fetchBookings } from './BookingsSlice';

import App from './App';

store.dispatch(fetchProducts());
store.dispatch(fetchBookings());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
