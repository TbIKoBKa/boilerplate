// Core
import React, { FC, useState } from 'react';

// Components
import { AccordionItem } from '../AccordionItem';

// Styles
import { Accordion as StyledAccordion, AccordionTitle } from './styles';

type AccordionItemType = {
    question: string,
    answer:   string,
}

type Proptypes = {
    title?:  string,
    source: Array<AccordionItemType>,
}

export const Accordion: FC<Proptypes> = ({ title = 'Accordion', source }) => {
    const [ selected, setSelected ] = useState(null);

    return (
        <StyledAccordion>
            <AccordionTitle>{title}</AccordionTitle>
            {
                source.map((item, index) => (
                    <AccordionItem
                        answer = { item.answer }
                        id = { index }
                        isSelected = { selected === index }
                        key = { index }
                        question = { item.question }
                        setSelected = { setSelected }
                    />
                ))
            }
        </StyledAccordion>
    );
};
