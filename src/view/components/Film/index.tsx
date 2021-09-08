// Core
import React, { FC } from 'react';
import { Redirect, useRouteMatch } from 'react-router';

// Types
import { Film as FilmType } from '../../../bus/films/types';

// Styles
import { Field, FieldTitle } from './styles';

// Tools
import { formatText } from '../../../tools/helpers';

type Proptypes = {
    data: FilmType
}

export const Film: FC<Proptypes> = ({ data }) => {
    const targetFields = [ 'title', 'opening_crawl', 'director', 'producer', 'release_date', 'created', 'edited' ];
    const { path } = useRouteMatch();

    return (
        data ? (
            <ul>
                {
                    targetFields.map((item) => (
                        <Field>
                            <FieldTitle>{formatText(item)}</FieldTitle>
                            {`: ${formatText(data[ `${item}` ])}`}
                        </Field>
                    ))
                }
            </ul>
        ) : (
            <Redirect to = { path.split('/').slice(0, -1)
                .join('/') }
            />
        )
    );
};
