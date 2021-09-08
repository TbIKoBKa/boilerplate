// Core
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from '../../../tools/hooks';

// Styles
import { People as StyledPeople, StyledLink, Person } from './styles';

export const People: FC = () => {
    const data = useSelector(({ people }) => people);
    const { path } = useRouteMatch();

    return (
        <StyledPeople>
            {
                data.map((item) => (
                    <Person key = { item.name }>
                        <StyledLink
                            to = { `${path}/${item.name}` }>{item.name}
                        </StyledLink>
                    </Person>
                ))
            }
        </StyledPeople>
    );
};
