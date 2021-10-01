// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type WeatherType = 'sunny' | 'cloudy' | 'rainy'

// State
export type Day = {
    id: string
    rain_probability: number
    humidity: number
    day: number
    temperature: number
    type: WeatherType
}
export type Days = Day[]

// Contracts
export type SetWeatherContract = CaseReducer<Days, PayloadAction<Days>>
