// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';
import { useField } from 'formik';
import styled, { css } from 'styled-components';

interface SelectProps extends DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    ref?: Ref<HTMLSelectElement>;
    error?: string | boolean;
}

const StyledSelect = styled.select<SelectProps>`
    ${({ error }) => error && css`
        color: #ff3333;
        border: 2px #ff3333 solid;
    `}
`;

type Proptypes = {
    name: string
}

export const Select: FC<Proptypes> = ({ children, name, ...props }) => {
    const [ field, meta ] = useField({
        ...props,
        name,
    });

    return (
        <>
            <StyledSelect
                error = { meta.touched && meta.error }
                { ...field }
                { ...props }>
                <option value = ''>{`Select ${name}`}</option>
                {children}
            </StyledSelect>
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </>
    );
};
