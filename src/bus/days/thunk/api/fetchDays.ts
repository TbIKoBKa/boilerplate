// Types
import { API_URL } from '../../../../init';
import { FetchDays } from './types';

export const fetchDays: FetchDays = async () => {
    try {
        const response = await fetch(API_URL, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw Error('Weather fetch failed');
        }

        const data = await response.json();

        return data.data;
    } catch (error) {
        console.log(error);
    }
};
