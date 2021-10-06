// Core
import React, { FC } from 'react';

// Styles
import { StyledHeader, Logo, CurrentDate, CurrentDayOfWeek, CurrentDayMonth } from './styles';

// Tools
import { getDayOfWeek, getMonthOfYear, getWeatherTypeIcon } from '../../../tools/helpers';

// Types
import { Day } from '../../../bus/days/types';

type Proptypes = {
    day: Day | null
}

export const Header: FC<Proptypes> = ({ day }) => {
    if (!day) {
        return null;
    }

    return (
        <StyledHeader>
            <Logo
                alt = 'weather logo'
                src = { getWeatherTypeIcon(day.type) }
            />
            <CurrentDate>
                <CurrentDayOfWeek
                    fontSize = { 28 }
                    fontWeight = { 400 }
                    margin = {{
                        top:    15,
                        bottom: 10,
                    }}>
                    {getDayOfWeek(day.day)}
                </CurrentDayOfWeek>
                <CurrentDayMonth
                    fontSize = { 14 }
                    fontWeight = { 200 }>
                    {`${new Date(day.day).getDate()} ${getMonthOfYear(day.day)}`}
                </CurrentDayMonth>
            </CurrentDate>
        </StyledHeader>
    );
};
