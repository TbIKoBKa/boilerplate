// Core
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const Filter = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

export const Button = styled.button`
    background-color: #3792ff; //#c584bc
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    &:hover {
        cursor: pointer;
        background-color: #1780ff; //#966590
    }
    &:disabled {
        opacity: .3;
        &:hover {
            cursor: auto;
            background-color: #4a9cff; //#c584bc
        }
    }
`;
