import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductsSlice';
import bookingsReducer from './reducers/BookingsSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        bookings: bookingsReducer,
    }
})