// Types
import { FetchFilms } from './types';

// Constants
import { API_FILMS_URL } from '../../../../init';

export const fetchFilms: FetchFilms = async () => {
    try {
        const response = await fetch(`${API_FILMS_URL}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw Error('Films fetch failed');
        }

        const data = await response.json();

        return data.results;
    } catch (error) {
        console.log(error);
    }
};
