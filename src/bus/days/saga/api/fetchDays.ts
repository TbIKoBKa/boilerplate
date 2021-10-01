// Tools
import { ControlledError } from '../../../../tools/utils';

// Constants
import { API_URL } from '../../../../init/constants';

// Types
import { FetchDaysContract } from './types';

export const fetchDays: FetchDaysContract = async () => {
    const response = await fetch(API_URL, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'fetchMessages failed',
            statusCode: response.status,
            data:       {
                test: 'ABOBA',
            },
        });
    }

    const data = await response.json();

    return data.data;
};
