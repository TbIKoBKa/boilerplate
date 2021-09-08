import * as types from './types';

export const fillProfileAction: types.FillProfileDataContract = (payload) => ({
    type: types.FILL_PROFILE_DATA,
    payload,
});
