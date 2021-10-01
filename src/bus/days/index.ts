// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Actions
import { fetchDaysThunk } from './thunk/thunks';

export const useWeather = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ days }) => days);

    return {
        data,
        fetchWeatherData: () => dispatch(fetchDaysThunk()),
    };
};
