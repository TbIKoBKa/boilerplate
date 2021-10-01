// Core
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-60%);
    width: 200px;
    height: 200px;
    svg {
        fill: white;
        animation: spinner__animation 3s linear infinite;
    }

    @keyframes spinner__animation {
        0% {
            transform: scale(1) rotate(0deg);
        }
        50% {
            transform: scale(0.8) rotate(180deg);
        }
        100% {
            transform: scale(1) rotate(360deg);
        }
    }
`;

export const Spinner: FC = () => {
    return (
        <StyledSpinner>
            <svg
                viewBox = '0 0 16 16'
                xmlns = 'http://www.w3.org/2000/svg'>
                <path d = 'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'/>
            </svg>
        </StyledSpinner>
    );
};
