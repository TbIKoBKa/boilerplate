// Types
import * as types from './types';

export const setPeopleAction: types.SetPeopleContract = (payload) => ({
    type: types.SET_PEOPLE,
    payload,
});
