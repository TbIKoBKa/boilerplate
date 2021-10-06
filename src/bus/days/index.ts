// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { useFilter } from '../client/filter';
import { useTogglersRedux } from '../client/togglers';

// Actions
import { fetchDaysThunk } from './thunk/thunks';
import { daysActions } from './slice';

// Types
import { Days } from './types';

export const useWeather = () => {
    const dispatch = useDispatch();

    const { togglersRedux: { isFiltered }, setTogglerAction } = useTogglersRedux();
    const days = useSelector(({ days }) => days);
    const { filters } = useFilter();

    const filterDays = (days: Days): Days => {
        if (!isFiltered) {
            return days.slice(0, 7);
        }

        return days.filter((day) => {
            if ((filters.type && day.type !== filters.type)
                || (filters.minTemp && day.temperature < filters.minTemp)
                || (filters.maxTemp && day.temperature > filters.maxTemp)
            ) {
                return false;
            }

            return true;
        }).slice(0, 7);
    };

    return {
        data:             filterDays(days),
        fetchWeatherData: async () => {
            setTogglerAction({ type: 'isDaysFetching', value: true });
            await dispatch(fetchDaysThunk());
            setTogglerAction({ type: 'isDaysFetching', value: false });
        },
        resetDaysAction: () => dispatch(daysActions.resetDays()),
    };
};
