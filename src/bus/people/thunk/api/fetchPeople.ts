// Types
import { FetchPeople } from './types';

// Constants
import { API_PEOPLE_URL } from '../../../../init';

export const fetchPeople: FetchPeople = async () => {
    try {
        const response = await fetch(`${API_PEOPLE_URL}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw Error('People fetch failed');
        }

        const data = await response.json();

        return data.results;
    } catch (error) {
        console.log(error);
    }
};
