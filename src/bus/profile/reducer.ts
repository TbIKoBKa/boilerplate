// Types
import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.Profile = {
    firstName:  '',
    surname:    '',
    age:        '',
    email:      '',
    sex:        '',
    speciality: '',
};

export const profileReducer: Reducer<types.Profile, types.ProfileActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE_DATA:
            return action.payload;
        default:
            return state;
    }
};
