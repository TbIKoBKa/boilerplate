// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import { Field, useField } from 'formik';
import styled, { css } from 'styled-components';

interface LabelProps extends DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    ref?: Ref<HTMLLabelElement>;
    error?: string | boolean;
}

const StyledLabel = styled.label<LabelProps>`
    ${({ error }) => error && css`
        color: #ff3333;
        border: 2px #ff3333 solid;
        border-right-width: 0;

        &:last-child {
            border-right-width: 2px;
            border-left-width: 0px;
        }
    `}
`;

type Proptypes = {
    name: string,
    value: string,
}

export const Radio: FC<Proptypes> = ({ children, ...props }) => {
    const [ field, meta ] = useField({
        ...props,
    });

    return (
        <StyledLabel
            error = { meta.touched && meta.error }>
            <Field
                type = 'radio'
                { ...field }
                { ...props }
            />
            {children}
        </StyledLabel>
    );
};
