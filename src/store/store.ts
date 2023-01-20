import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cardsSlice from '../features/card/cardsSlice';
import { cardsApi } from '../services/cards';

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([cardsApi.middleware]),
    reducer: {
        cards: cardsSlice,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
