// Types
import * as types from './types';

export const setFilmsAction: types.SetFilmsContract = (payload) => ({
    type: types.SET_FILMS,
    payload,
});
