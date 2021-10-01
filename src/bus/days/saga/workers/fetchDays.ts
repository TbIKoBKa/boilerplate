// Types
import { Days } from '../../types';

// Sync actions
import { daysActions } from '../../slice';

// Api
import * as API from '../api';

// Instruments
import { IControlledError, makeRequest } from '../../../../tools/utils';

export function* fetchDays() {
    const combineResult: IControlledError & Days = yield makeRequest<Days>({
        fetcher:          API.fetchDays,
        togglerType:      'isDaysFetching',
        succesAction:     daysActions.setDays,
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    }

    // if (combineResult.length) {
    //     console.log(combineResult);
    // }
}
