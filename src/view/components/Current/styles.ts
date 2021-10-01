// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

// Images
import rainyIcon from '../../../assets/images/rainy.png';
import humidityIcon from '../../../assets/images/humidity.png';

type MetaPropType = 'rainy' | 'humidity'
interface MetaPropProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    type: MetaPropType
}

export const StyledCurrent = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 38px;
`;

export const MetaProp = styled.span<MetaPropProps>`
    display: inline-flex;
    align-items: center;
    &::before {
        content: "";
        display: inline-block;
        margin-right: 11px;
        width: 30px;
        height: 28px;
        background: url(${({ type }) => type === 'rainy' ? rainyIcon : humidityIcon}) center no-repeat;
        background-size: contain;
    }
    &:first-child {
        margin-right: 81px;
    }
`;
