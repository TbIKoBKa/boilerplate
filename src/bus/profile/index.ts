// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Types
import { Profile } from './types';
import { fillProfileAction } from './actions';

export const useProfile = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ profile }) => profile);

    const fillProfile = (data: Profile) => {
        console.log(data);
        dispatch(fillProfileAction(data));
    };

    return {
        data,
        fillProfile,
    };
};
