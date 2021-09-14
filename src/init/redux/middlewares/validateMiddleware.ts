// Core
import { Middleware } from 'redux';

// Instruments
import { store as rootStore } from '..';

// Types
import { SET_PEOPLE, People, Person } from '../../../bus/people/types';

export const validateMiddleWare: Middleware<{}, typeof rootStore> = () => (next) => (action) => {
    if (action.type === SET_PEOPLE) {
        console.log('--Filtering');
        console.log('before', action.payload);
        // eslint-disable-next-line no-extra-parens
        action.payload = (action.payload as People).filter((item: Person) => Number(item.height) > 100);
        console.log('after', action.payload);
    }

    next(action);
};
