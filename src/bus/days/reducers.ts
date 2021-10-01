// Types
import * as types from './types';

export const setDays: types.SetWeatherContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
