// Core
import React, { FC } from 'react';

// Styles
import { AccordionItem as StyledAccordionItem, AccordionAnswer, AccordionQuestion } from './styles';

type Proptypes = {
    question: string
    answer: string
    id: number
    isSelected: boolean
    setSelected: Function
}

export const AccordionItem: FC<Proptypes> = ({ question, answer, id, isSelected, setSelected }) => {
    const handleClick = () => {
        setSelected(id);
    };

    return (
        <StyledAccordionItem>
            <AccordionQuestion
                selected = { isSelected }
                onClick = { handleClick }>
                <span>{question}</span>
            </AccordionQuestion>
            <AccordionAnswer selected = { isSelected }>{answer}</AccordionAnswer>
        </StyledAccordionItem>
    );
};
