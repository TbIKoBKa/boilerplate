// Images
import cloudy from '../../assets/images/weather-icon-cloudy.png';
import sunny from '../../assets/images/weather-icon-sunny.png';
import rainy from '../../assets/images/weather-icon-rainy.png';

export const getWeatherTypeIcon = (dayType: string): string => {
    if (dayType === 'cloudy') {
        return cloudy;
    } else if (dayType === 'sunny') {
        return sunny;
    }

    return rainy;
};
