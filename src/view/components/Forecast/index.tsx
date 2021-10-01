// Core
import React, { FC, Dispatch, SetStateAction } from 'react';

// Elements
import { Label } from '../../elements';

// Styles
import { ListDays, Day, Message } from './styles';

// Types
import { Day as DayType, Days } from '../../../bus/days/types';

// Tools
import { getDayOfWeek } from '../../../tools/helpers';

type PropTypes = {
    day: DayType | undefined
    filteredDays: Days
    setActiveDay: Dispatch<SetStateAction<DayType | undefined>>
}

export const Forecast: FC<PropTypes> = ({ day, filteredDays, setActiveDay }) => {
    const onClickHandle = (day: DayType) => setActiveDay(day);

    return (
        filteredDays.length ? (
            <ListDays>
                {
                    day && filteredDays.map((item) => (
                        <Day
                            key = { item.id }
                            selected = { item.id === day.id }
                            weatherType = { item.type }
                            onClick = { () => onClickHandle(item) }>
                            <Label
                                fontSize = { 18 }
                                fontWeight = { 400 }
                                margin = {{
                                    bottom: 90,
                                }}>
                                {getDayOfWeek(item.day)}
                            </Label>
                            <Label
                                afterIcon = 'small'
                                fontSize = { 30 }
                                fontWeight = { 200 }>
                                {item.temperature}
                            </Label>
                        </Day>
                    ))
                }
            </ListDays>
        ) : <Message>По заданным критериям нет доступных дней</Message>
    );
};
