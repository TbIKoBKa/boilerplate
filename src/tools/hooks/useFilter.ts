// Core
import { useState } from 'react';
import { WeatherType } from '../../bus/days/types';

export const useFilter = () => {
    const [ filtered, setFiltered ] = useState<boolean>(false);
    const [ selectedWeather, setSelectedWeather ] = useState<WeatherType | null>(null);
    const [ maxTemp, setMaxTemp ] = useState<string>('');
    const [ minTemp, setMinTemp ] = useState<string>('');

    return {
        filtered,
        selectedWeather,
        maxTemp,
        minTemp,
        setFiltered,
        setSelectedWeather,
        setMaxTemp,
        setMinTemp,
    };
};
