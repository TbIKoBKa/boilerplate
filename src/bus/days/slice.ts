// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Days } from './types';

// Reducers
import * as reducers from './reducers';
import * as extraReducers from './thunk';

const initialState: Days = [];

export const daysSlice = createSlice({
    name:          'days',
    initialState,
    reducers,
    extraReducers: extraReducers.fetchDaysAsync,
});

export const messagesActions = daysSlice.actions;
export default daysSlice.reducer;
