// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import days from '../../bus/days/slice';

// Middleware
<<<<<<< HEAD
import { middleware } from './middleware';
=======
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';
>>>>>>> dff793d6cf9e43852bc85628b64b1b32aa09319c

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
