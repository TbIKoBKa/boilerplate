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
    const { togglersRedux: { isPeopleFetching }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        (async () => {
            setTogglerAction({
                type:  'isPeopleFetching',
                value: true,
            });
            await dispatch(fetchPeopleAsync());
            setTogglerAction({
                type:  'isPeopleFetching',
                value: false,
            });
        })();
    }, []);

    return {
        data,
        loading: isPeopleFetching,
    };
};
