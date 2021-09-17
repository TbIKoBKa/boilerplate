// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Actions
import { fetchUsersActionAsync } from './saga/actions';

// Redux
import { useTogglersRedux } from '../client';

export const useUsersQuery = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ users }) => users);
    const { togglersRedux: { isUsersFetching }} = useTogglersRedux();

    useEffect(() => {
        dispatch(fetchUsersActionAsync());
    }, []);

    return {
        data,
        loading: isUsersFetching,
    };
};

export const useUsersMutations = () => {
    //const dispatch = useDispatch();
    const { togglersRedux: { isUsersFetching }} = useTogglersRedux();

    return {
        loading: isUsersFetching,
    };
};
