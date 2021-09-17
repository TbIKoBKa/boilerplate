// Core
import { Dispatch } from 'redux';
import { togglerCreatorAction } from '../../client';

// Actions
import { setPeopleAction } from '../actions';

// API
import { fetchPeople } from './api';

export const fetchPeopleAsync = () => async (dispatch: Dispatch) => {
    dispatch(togglerCreatorAction({ type: 'isFilmsFetching', value: true }));

    const data = await fetchPeople();
    dispatch(setPeopleAction(data));

    dispatch(togglerCreatorAction({ type: 'isPeopleFetching', value: false }));
};
