// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// API
import { fetchFilmsAsync } from './thunk';

// Togglers
import { useTogglersRedux } from '../client';

export const useFilmsQuery = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ films }) => films);
    const { togglersRedux: { isFilmsFetching }} = useTogglersRedux();

    useEffect(() => {
        dispatch(fetchFilmsAsync());
    }, []);

    return {
        data,
        loading: isFilmsFetching,
    };
};
