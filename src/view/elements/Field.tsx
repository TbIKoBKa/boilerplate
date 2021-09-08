// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import { useField } from 'formik';
import styled, { css } from 'styled-components';

interface LabelProps extends DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    ref?: Ref<HTMLLabelElement>;
    error?: string | boolean;
}

const StyledLabel = styled.label<LabelProps>`
    ${({ error }) => error && css`
        width: fit-content;
        color: #ff3333;
        border: 2px #ff3333 solid;
    `}
`;

const StyledField = styled.input`
    margin-left: 5px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }
`;

type Proptypes = {
    children: any,
    name: string,
    placeholder?: string,
    type?: string,
}

export const MyInput: FC<Proptypes> = ({ children, name, ...props }) => {
    const [ field, meta ] = useField({
        name,
        ...props,
    });

    return (
        <>
            <StyledLabel
                error = { meta.touched && meta.error }>
                {children}
                <StyledField
                    { ...field }
                    { ...props }
                />
            </StyledLabel>
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </>
    );
};
