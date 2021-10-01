// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Days } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: Days = [];

export const daysSlice = createSlice({
    name: 'days',
    initialState,
    reducers,
});

export const daysActions = daysSlice.actions;
export default daysSlice.reducer;
