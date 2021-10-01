// Core
import React, { FC, ChangeEvent } from 'react';

// Styles
import { Filter as StyledFilter, CheckBox, StyledLabel, Input, Button } from './styles';

// Types
import { filterContract } from '../../pages/Main/types';
import { WeatherType } from '../../../bus/days/types';

// Tools
import { useFilter } from '../../../tools/hooks';

type PropTypes = {
    onFilter: filterContract
}

export const Filter: FC<PropTypes> = ({ onFilter }) => {
    const {
        filtered,
        selectedWeather,
        maxTemp,
        minTemp,
        setFiltered,
        setSelectedWeather,
        setMaxTemp,
        setMinTemp,
    } = useFilter();

    const onCheckBoxClickHandle = (type: WeatherType) => {
        if (!filtered) {
            setSelectedWeather(type);
        }
    };

    const onButtonClickHandle = () => {
        if (filtered) {
            setSelectedWeather(null);
            setMinTemp('');
            setMaxTemp('');
            onFilter({ weatherType: null, minTemp: '', maxTemp: '' });
        } else {
            onFilter({ weatherType: selectedWeather, minTemp, maxTemp });
        }
        setFiltered((prevState) => !prevState);
    };

    const onMinTempChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setMinTemp(event.target.value);

    const onMaxTempChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setMaxTemp(event.target.value);

    return (
        <StyledFilter>
            <CheckBox
                disabled = { filtered }
                selected = { selectedWeather === 'cloudy' }
                onClick = { () => onCheckBoxClickHandle('cloudy') }>
                Облачно
            </CheckBox>
            <CheckBox
                disabled = { filtered }
                selected = { selectedWeather === 'sunny' }
                onClick = { () => onCheckBoxClickHandle('sunny') }>
                Солнечно
            </CheckBox>
            <StyledLabel>
                Минимальная температура
                <Input
                    disabled = { filtered }
                    type = 'number'
                    value = { minTemp }
                    onChange = { onMinTempChangeHandle }
                />
            </StyledLabel>
            <StyledLabel>
                Максимальная температура
                <Input
                    disabled = { filtered }
                    type = 'number'
                    value = { maxTemp }
                    onChange = { onMaxTempChangeHandle }
                />
            </StyledLabel>
            <Button
                children = { filtered ? 'Сбросить' : 'Отфильтровать' }
                disabled = { selectedWeather === null && minTemp === '' && maxTemp === '' }
                onClick = { onButtonClickHandle }
            />
        </StyledFilter>
    );
};
