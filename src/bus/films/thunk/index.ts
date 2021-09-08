// Core
import { Dispatch } from 'redux';

// Actions
import { setFilmsAction } from '../actions';

// API
import { fetchFilms } from './api';

export const fetchFilmsAsync = () => async (dispath: Dispatch) => {
    const data = await fetchFilms();

    dispath(setFilmsAction(data));
};
