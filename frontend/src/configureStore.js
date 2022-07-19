import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

import productsReducer from './reducers/ProductsSlice';
import bookingsReducer from './reducers/BookingsSlice';
import sellersReducer from './reducers/SellersSlice';
import userReducer from './reducers/UserSlice';

const userPersistConfig = {
    key: 'user',
    storage: storage
}

const bookingsPersistConfig = {
    key: 'bookings',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const sellersPersistConfig = {
    key: 'sellers',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const productsPersistConfig = {
    key: 'products',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

export const store = configureStore({
    reducer: {
        products: persistReducer(productsPersistConfig, productsReducer),
        bookings: persistReducer(bookingsPersistConfig, bookingsReducer),
        sellers: persistReducer(sellersPersistConfig, sellersReducer),
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
