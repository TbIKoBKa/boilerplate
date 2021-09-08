// Core
import React, { FC } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

// Types
import { Person as PersonType } from '../../../bus/people/types';

// Styles
import { Field, FieldTitle } from './styles';

// Tools
import { formatText } from '../../../tools/helpers';

type Proptypes = {
    data: PersonType
}

export const Person: FC<Proptypes> = ({ data }) => {
    const targetFields = [ 'name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'created' ];
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
