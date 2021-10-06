// Core
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useFilter } from '../../../bus/client/filter';

// Styles
import { Filter as StyledFilter, CheckBox, Button, StyledSlider } from './styles';

// Tools
import { generateMarks } from '../../../tools/helpers';

// Types
import { WeatherType } from '../../../bus/days/types';

export const Filter: FC = () => {
    const { togglersRedux: { isFiltered }, setTogglerAction } = useTogglersRedux();
    const { filters, setFilterAction, resetFilterAction } = useFilter();

    const sliderValues = {
        min:  -30,
        max:  30,
        step: 10,
    };

    const onCheckBoxClickHandle = (type: WeatherType) => {
        if (!isFiltered) {
            setFilterAction({
                type,
            });
        }
    };

    const onButtonClickHandle = () => {
        if (isFiltered) {
            resetFilterAction();
        }
        setTogglerAction({ type: 'isFiltered', value: !isFiltered });
    };

    const handleChangeSlider = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0 && newValue[ 0 ] !== filters.minTemp) {
            setFilterAction({ minTemp: Math.min(newValue[ 0 ]) });
        } else if (newValue[ 1 ] !== filters.minTemp) {
            setFilterAction({ maxTemp: Math.min(newValue[ 1 ]) });
        }
    };

    return (
        <StyledFilter>
            <CheckBox
                disabled = { isFiltered }
                selected = { filters.type === 'cloudy' }
                onClick = { () => onCheckBoxClickHandle('cloudy') }>
                Облачно
            </CheckBox>
            <CheckBox
                disabled = { isFiltered }
                selected = { filters.type === 'sunny' }
                onClick = { () => onCheckBoxClickHandle('sunny') }>
                Солнечно
            </CheckBox>
            <StyledSlider
                disabled = { isFiltered }
                getAriaLabel = { () => 'Temperature' }
                getAriaValueText = { (value: number) => `${value}°C` }
                marks = { generateMarks(sliderValues.min, sliderValues.max, sliderValues.step) }
                max = { sliderValues.max }
                min = { sliderValues.min }
                size = 'medium'
                value = { [ Number(filters.minTemp), Number(filters.maxTemp) ] }
                valueLabelDisplay = 'auto'
                onChange = { handleChangeSlider }
            />
            <Button
                children = { isFiltered ? 'Сбросить' : 'Отфильтровать' }
                disabled = { filters.type === null
                    && filters.minTemp === null
                    && filters.maxTemp === null
                }
                onClick = { onButtonClickHandle }
            />
        </StyledFilter>
    );
};
