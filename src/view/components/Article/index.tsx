// Core
import React, { FC } from 'react';

// Elements
import { CommentsCounter, LikesCounter, Tag } from '../../elements';

// Styles
import { StyledArticle, Poster, Tags, ArticleHeader, ArticleMain, ArticleFooter } from './styles';

type Proptypes = {
    title: string
    description: string
    published: string
    likes: number
    comments: number
    image: string
    tags: Array<string>
}

export const Article: FC<Proptypes> = ({ title, description, published, likes, comments, image, tags }) => {
    return (
        <StyledArticle>
            <ArticleHeader>
                <Poster>
                    <img
                        alt = ''
                        src = { image }
                    />
                </Poster>
                <Tags>
                    {
                        tags.map((tag, index) => (
                            <div key = { index }>
                                <Tag source = { tag } />
                            </div>
                        ))
                    }
                </Tags>
            </ArticleHeader>
            <ArticleMain>
                <h1>{title}</h1>
                <p>{description}</p>
            </ArticleMain>
            <ArticleFooter>
                <span>{new Date(published).toLocaleString('ru', {
                    year:     'numeric',
                    month:    'numeric',
                    day:      'numeric',
                    timeZone: 'UTC',
                })}
                </span>
                <div className = 'controls'>
                    <CommentsCounter counts = { comments }/>
                    <LikesCounter counts = { likes }/>
                </div>
            </ArticleFooter>
        </StyledArticle>
    );
};
