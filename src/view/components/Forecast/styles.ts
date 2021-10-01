// Core
import React, { DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';

// Types
import { WeatherType } from '../../../bus/days/types';

// Tools
import { getWeatherTypeIcon } from '../../../tools/helpers';

interface DayProps extends DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    selected?: boolean
    weatherType: WeatherType
}

export const ListDays = styled.ul`
    list-style: none;
    display: flex;
`;

export const Day = styled.li<DayProps>`
    position: relative;
    width: 130px;
    height: 204px;
    background-color: #4a9cff; // #c486bb
    color: #fff;
    padding-top: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform .1s ease-in-out;
    ${({ selected }) => selected && css`
        background-color: #64aaff; // #d9a9ce
    `}
    &:hover {
        background-color: #64aaff; // #d9a9ce
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 0 0 5px 3px #59a4ff;
        z-index: 100;
    }
    &:first-child {
        border-radius: 6px 0 0 6px;
    }
    &:last-child {
        border-radius: 0 6px 6px 0;
    }
    &::before {
        position: absolute;
        top: 86px;
        content: "";
        display: block;
        width: 100%;
        height: 37px;
        background: url(${({ weatherType }) => getWeatherTypeIcon(weatherType)}) center no-repeat;
        background-size: contain;
    }
`;

export const Message = styled.h1`
    font-weight: 400;
    font-size: 28px;
    color: #fff;
    position: absolute;
    bottom: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`;
