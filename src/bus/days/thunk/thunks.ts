// Core
import { createAsyncThunk } from '@reduxjs/toolkit';

// Types
import { FETCH_WEATHER_ASYNC } from './types';

// API
import { fetchDays } from './api';

export const fetchDaysThunk = createAsyncThunk(
    FETCH_WEATHER_ASYNC,
    fetchDays,
);
