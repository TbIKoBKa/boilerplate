// Core
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Types
import * as types from '../types';

// Fetch
export const FETCH_WEATHER_ASYNC = 'days/FETCH_WEATHER_ASYNC';

// Contracts
export type FetchDaysAsyncContract = (builder: ActionReducerMapBuilder<types.Days>) => void;
