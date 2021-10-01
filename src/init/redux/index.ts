// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import days from '../../bus/days/slice';

// Middleware
import { middleware } from './middleware';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        days,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
