// Core
import { Dispatch } from 'redux';

// Actions
import { setPeopleAction } from '../actions';

// API
import { fetchPeople } from './api';

export const fetchPeopleAsync = () => async (dispatch: Dispatch) => {
    const data = await fetchPeople();

    dispatch(setPeopleAction(data));
};
