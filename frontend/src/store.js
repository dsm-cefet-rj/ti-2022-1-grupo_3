import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductsSlice';
import bookingsReducer from './BookingsSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        bookings: bookingsReducer,
    }
})