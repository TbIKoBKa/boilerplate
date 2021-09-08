// Core
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from '../../../tools/hooks';

// Styles
import { Films as StyledFilms, StyledLink, Film } from './styles';

export const Films: FC = () => {
    const data = useSelector(({ films }) => films);
    const { path } = useRouteMatch();

    return (
        <StyledFilms>
            {
                data.map((item) => (
                    <Film key = { item.episode_id }>
                        <StyledLink
                            to = { `${path}/${item.episode_id}` }>{item.title}
                        </StyledLink>
                    </Film>
                ))
            }
        </StyledFilms>
    );
};
