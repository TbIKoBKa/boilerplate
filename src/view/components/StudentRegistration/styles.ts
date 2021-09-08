import { DetailedHTMLProps, Ref } from 'react';
import styled, { css } from 'styled-components';
import { Form } from 'formik';

interface RadioGroupProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    ref?: Ref<HTMLDivElement>;
    error?: string;
}

export const StyledForm = styled(Form)`
    & > * {
        display: block;
        margin-bottom: 10px;
    }
`;

export const StyledRadioGroup = styled.div<RadioGroupProps>`
    ${({ error }) => error && css`
        width: fit-content;
        border: 2px solid #ff3333;
    `}
`;
