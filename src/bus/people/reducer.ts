// Core
import { Reducer } from 'redux';

// Types
import * as types from './types';

const initialState: types.People = [];

export const peopleReducer: Reducer<types.People, types.PeopleActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PEOPLE:
            return action.payload;
        default:
            return state;
    }
};
