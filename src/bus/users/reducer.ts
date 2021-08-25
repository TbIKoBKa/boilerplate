import { Reducer } from 'redux';

import * as types from './types';

const initialState: types.TUsers = [];

export const usersReducer: Reducer<types.TUsers, types.UsersActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS:
            return action.payload;
        default:
            return state;
    }
};
