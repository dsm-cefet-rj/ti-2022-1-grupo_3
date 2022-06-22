import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchProducts } from './reducers/ProductsSlice';
import { fetchBookings } from './reducers/BookingsSlice';
import { fetchSellers } from './reducers/SellerSlice';
import App from './App';

store.dispatch(fetchProducts());
store.dispatch(fetchBookings());
store.dispatch(fetchSellers());

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);