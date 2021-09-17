// Core
import { Dispatch } from 'redux';
import { togglerCreatorAction } from '../../client';

// Actions
import { setFilmsAction } from '../actions';

// API
import { fetchFilms } from './api';

export const fetchFilmsAsync = () => async (dispath: Dispatch) => {
    dispath(togglerCreatorAction({ type: 'isFilmsFetching', value: true }));

    const data = await fetchFilms();
    dispath(setFilmsAction(data));

    dispath(togglerCreatorAction({ type: 'isFilmsFetching', value: false }));
};
