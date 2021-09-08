// Core
import { Ref, DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';

interface PProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    ref?: Ref<HTMLParagraphElement>;
    selected?: boolean;
}

interface DivProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ref?: Ref<HTMLDivElement>;
    selected?: boolean;
}

export const AccordionAnswer = styled.p<PProps>`
    padding: 0 30px;
    margin: 0 0 22px;
    font-size: 16px;
    color: #000;
    display: none;
    ${({ selected }) => selected && css`
        display: inline-block;
    `}
`;

export const AccordionQuestion = styled.div<DivProps>`
    position: relative;
    padding: 15px 30px;
    background: #F1F4FB;
    font-size: 16px;
    color: rgba(0,0,0,0.6);
    line-height: 24px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 22px;
    transition: color 0.3s;

    &::after {
        content: '+';
        position: absolute;
        right: 30px;
    }

    ${({ selected }) => selected && css`
        cursor: initial;
        color: #4886FF;

        &::after {
            content: '-';
        }
    `}
`;

export const AccordionItem = styled.div`
    width: 800px;
    margin-bottom: 10px;
    
    &:hover {
        .accordion-question {
        color: #000;
        }
    }
`;
