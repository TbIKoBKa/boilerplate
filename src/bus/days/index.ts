// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Actions
import { fetchDaysActionAsync } from './saga/actions';

export const useWeather = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ days }) => days);

    return {
        data,
        fetchWeatherData: () => dispatch(fetchDaysActionAsync()),
    };
};
