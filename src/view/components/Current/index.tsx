// Core
import React, { FC } from 'react';
import { Day } from '../../../bus/days/types';

// Components
import { Label } from '../../elements';

// Styles
import { StyledCurrent, MetaProp } from './styles';

type PropTypes = {
    day: Day | null,
}

export const Current: FC<PropTypes> = ({ day }) => {
    if (!day) {
        return null;
    }

    return (
        <StyledCurrent>
            <Label
                afterIcon = 'big'
                fontSize = { 350 }
                fontWeight = { 200 }
                lineHeight = { 1 }
                margin = {{
                    bottom: 100,
                }}>
                {day.temperature}
            </Label>
            <Label
                fontSize = { 19 }
                fontWeight = { 200 }>
                <MetaProp type = 'rainy'>%{day?.rain_probability}</MetaProp>
                <MetaProp type = 'humidity'>%{day?.humidity}</MetaProp>
            </Label>
        </StyledCurrent>
    );
};
