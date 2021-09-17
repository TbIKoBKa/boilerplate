// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// API
import { fetchPeopleAsync } from './thunk';

// Togglers
import { useTogglersRedux } from '../client';

export const usePeopleQuery = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ people }) => people);
    const { togglersRedux: { isPeopleFetching }} = useTogglersRedux();

    useEffect(() => {
        dispatch(fetchPeopleAsync());
    }, []);

    return {
        data,
        loading: isPeopleFetching,
    };
};
