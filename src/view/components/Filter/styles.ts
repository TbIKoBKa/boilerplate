// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

// Components
import { Slider, ButtonUnstyled  } from '@mui/material';

export const StyledSlider = styled(Slider)({
    height:               8,
    '& .MuiSlider-thumb': {
        height:                                               24,
        width:                                                24,
        backgroundColor:                                      '#fff',
        border:                                               '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight:                   1.2,
        fontSize:                     12,
        color:                        '#000',
        background:                   'unset',
        padding:                      0,
        width:                        32,
        height:                       32,
        borderRadius:                 '50% 50% 50% 0',
        backgroundColor:              '#eee',
        transformOrigin:              'bottom left',
        transform:                    'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before':                   { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
    '& .MuiSlider-rail': {
        height: 8,
    },
    '& .MuiSlider-markLabel': {
        color:    '#eee',
        fontSize: 10,
    },
});

export const Filter = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 250px;
`;

interface CheckBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    selected: boolean
    disabled?: boolean
}

export const CheckBox = styled.span<CheckBoxProps>`
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-bottom: 25px;
    &::after {
        content:      '';
        display:      inline-block;
        width:        25px;
        height:       25px;
        border:       1px solid #fff;
        border-radius: 3px;
        margin-left:   14px;   
    }

    ${({ disabled }) => !disabled && {
        [ '&:hover' ]: {
            cursor: 'pointer',
        },
    }}

    ${({ selected }) => selected && css`
        &::before {
            content: "✓";
            position: absolute;
            right: 7px;
        }
    `}
`;

export const StyledLabel = styled.label`
    display: inline-block;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 26px;
`;

export const Input = styled.input`
    font-weight: 400;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    width: 40px;
    outline: none;
    text-align: center;
    margin-left: 14px;
    color: #fff;
`;

export const Button = styled(ButtonUnstyled)({
    fontFamily:    'Roboto',
    background:    '#eee',
    borderRadius:  8,
    letterSpacing: 1,
    textTransform: 'uppercase',
    border:        0,
    boxShadow:     '0 3px 5px 2px #ddd',
    color:         '#333',
    height:        48,
    padding:       '10px 15px',
    fontWeight:    400,
    fontSize:      16,
    '&:hover':     {
        cursor:          'pointer',
        backgroundColor: '#ddd',
    },
    '&:disabled': {
        opacity:   0.3,
        '&:hover': {
            cursor: 'auto',
        },
    },
});

// export const StyledButton = styled.button`
//     background-color: #3792ff; //#c584bc
//     border: none;
//     padding: 10px 15px;
//     border-radius: 8px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     font-weight: 400;
//     font-size: 16px;
//     color: #fff;
//     &:hover {
//         cursor: pointer;
//         background-color: #1780ff; //#966590
//     }
//     &:disabled {
//         opacity: .3;
//         &:hover {
//             cursor: auto;
//             background-color: #4a9cff; //#c584bc
//         }
//     }
// `;
