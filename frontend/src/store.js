import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import entriesReducer from './slices/entriesSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        entries: entriesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;
