// Core
import React, { FC } from 'react';

// Components
import { News as NewsComponent, Accordion } from '../../components';

// News source
import source from './source.json';

const News: FC = () => {
    const data = [
        {
            question: 'What is your name?',
            answer:   'My name is Andrii',
        },
        {
            question: 'What is your name?',
            answer:   'My name is Andrii',
        },
    ];

    return (
        <>
            <NewsComponent source = { source } />
            <Accordion source = { data } />
        </>
    );
};

export default News;
