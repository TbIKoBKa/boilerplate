// Types
import { FetchUsers } from './types';

// Constants
import { API_USERS_URL } from '../../../../init';

export const fetchUsers: FetchUsers = async () => {
    try {
        const response = await fetch(`${API_USERS_URL}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw Error('Users fetch failed');
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }
};
