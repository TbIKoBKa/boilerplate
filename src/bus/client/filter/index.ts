// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../../tools/hooks';

// Types
import { Day, WeatherType } from '../../days/types';

type TFilter = {
    type?: WeatherType | null
    minTemp?: number
    maxTemp?: number
}

type TActiveDay = {
    activeDay: Day | null
}

type FilterState = TFilter & TActiveDay

type ISetFilter = PayloadAction<TFilter>
type ISetCurrentDay = PayloadAction<TActiveDay>

const initialState: FilterState  = {
    minTemp:   0,
    maxTemp:   0,
    activeDay: null,
};

// Slice
export const filterSlice = createSlice({
    name:     'filter',
    initialState,
    reducers: {
        setFilter: (state, action: ISetFilter) => ({
            ...state,
            ...action.payload,
        }),
        setActiveDay: (state, action: ISetCurrentDay) => {
            state.activeDay = action.payload.activeDay;
        },
        resetFilter: () => initialState,
    },
});

// Interfaces
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;

export const useFilter = () => {
    const dispatch = useDispatch();

    return {
        filters:            useSelector(({ filter }) => filter),
        setFilterAction:    (filter: TFilter) => void dispatch(filterActions.setFilter(filter)),
        setActiveDayAction: (day: Day) => void dispatch(filterActions.setActiveDay({ activeDay: day })),
        resetFilterAction:  () => void dispatch(filterActions.resetFilter()),
    };
};
