// Core
import React, { FC } from 'react';

// Components
import { Article } from '../Article';

// Styles
import { News as StyledNews } from './styles';

type ArticleType = {
    title:       string,
    description: string,
    published:   string,
    likes:       number,
    comments:    number,
    image:       string,
    tags:        Array<string>,
}

type Proptypes = {
    source: Array<ArticleType>
}

export const News: FC<Proptypes> = ({ source }) => {
    return (
        <StyledNews>
            {
                source.map((item, index) => (
                    <Article
                        comments = { item.comments }
                        description = { item.description }
                        image = { item.image }
                        key = { index }
                        likes = { item.likes }
                        published = { item.published }
                        tags = { item.tags }
                        title = { item.title }
                    />
                ))
            }
        </StyledNews>
    );
};
