// Types
import { Days, WeatherType } from '../../../bus/days/types';

export type FilterFieldsTypes = {
    weatherType: WeatherType | null
    minTemp: string
    maxTemp: string
}

export type filterContract = (fields: FilterFieldsTypes) => Days
