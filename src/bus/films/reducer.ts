// Core
import { Reducer } from 'redux';

// Types
import * as types from './types';

const inittialState: types.Films = [];

export const filmsReducer: Reducer<types.Films, types.PeopleActionTypes> = (state = inittialState, action) => {
    switch (action.type) {
        case types.SET_FILMS:
            return action.payload;
        default:
            return state;
    }
};
