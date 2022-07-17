import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './reducers/ProductsSlice';
import bookingsReducer from './reducers/BookingsSlice';
import sellersReducer from './reducers/SellersSlice';
import userReducer from './reducers/UserSlice';

const userPersistConfig = {
    key: 'user',
    storage: storage
}

export const store = configureStore({
    reducer: {
        products: productReducer,
        bookings: bookingsReducer,
        sellers: sellersReducer,
        user: persistReducer(userPersistConfig, userReducer),
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
