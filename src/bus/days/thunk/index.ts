// Thunks
import * as thunks from './thunks';

// Types
import { FetchDaysAsyncContract } from './types';

export const fetchDaysAsync: FetchDaysAsyncContract = (builder) => {
    builder.addCase(thunks.fetchDaysThunk.fulfilled, (...args) => {
        const [ , action ] = args;

        return action.payload;
    });
};
