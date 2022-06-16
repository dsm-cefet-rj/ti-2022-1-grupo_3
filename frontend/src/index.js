import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchProducts } from './ProductsSlice';
import { fetchBookings } from './BookingsSlice';

import App from './App';

store.dispatch(fetchProducts());
store.dispatch(fetchBookings());

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
