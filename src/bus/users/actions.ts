import * as types from './types';

export const setUsersAction: types.SetUsersContract = (payload) => ({
    type: types.SET_USERS,
    payload,
});
