/**
 * @jest-environment jsdom
 */

// Core
import { createStore, combineReducers } from 'redux';

// Reducer
import { togglersReducer as togglers } from '../../../bus/client';
import { filmsReducer as films } from '../../../bus/films/reducer';
import { peopleReducer as people } from '../../../bus/people/reducer';
import { profileReducer as profile } from '../../../bus/profile/reducer';
import { todosReducer as todos } from '../../../bus/todos/reducer';
import { usersReducer as users } from '../../../bus/users/reducer';

// Store
import { store } from '..';

export const refRootReducer = combineReducers({
    togglers,
    films,
    people,
    profile,
    todos,
    users,
});

const refStore = createStore(refRootReducer);

describe('redux store', () => {
    test('should have a valid state shape', () => {
        expect(store.getState()).toStrictEqual(refStore.getState());
    });
});
