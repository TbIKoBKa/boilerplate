// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Fonts
import RobotoThin from '../../assets/fonts/Roboto-Thin.ttf';
import RobotoLight from '../../assets/fonts/Roboto-Light.ttf';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
    ${reset}

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 1;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoThin}) format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`;

