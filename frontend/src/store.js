import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductsSlice';
import bookingsReducer from './reducers/BookingsSlice';
import sellersReducer from './reducers/SellersSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        bookings: bookingsReducer,
        sellers: sellersReducer,
    }
})