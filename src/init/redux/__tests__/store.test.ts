/**
 * @jest-environment jsdom
 */

// Core
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Reducer
import { togglersReducer as togglers } from '../../../bus/client';
import { filmsReducer as films } from '../../../bus/films/reducer';
import { peopleReducer as people } from '../../../bus/people/reducer';
import { profileReducer as profile } from '../../../bus/profile/reducer';
import { todosReducer as todos } from '../../../bus/todos/reducer';
import { usersReducer as users } from '../../../bus/users/reducer';

// Instruments
import { store } from '..';
import { middlewares } from '../middlewares';

export const refRootReducer = combineReducers({
    togglers,
    films,
    people,
    profile,
    todos,
    users,
});

const refPersistedReducer = persistReducer(
    {
        key:       process.env.APP_NAME || 'AwesomeApp',
        storage,
        whitelist: [ 'todos' ],
    },
    refRootReducer,
);

const refStore = createStore(
    refPersistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
);

describe('redux store', () => {
    test('should have a valid state shape', () => {
        expect(store.getState()).toStrictEqual(refStore.getState());
    });
});
