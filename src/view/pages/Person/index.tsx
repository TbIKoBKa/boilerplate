// Core
import React, { FC } from 'react';
import { useParams } from 'react-router';
import { useSelector } from '../../../tools/hooks';

// Components
import { Person as PersonComponent } from '../../components';

type ParamsType = {
    id: string
}

const Person: FC = () => {
    const { id } = useParams<ParamsType>();
    const data = useSelector(({ people }) => people);

    const currentPersonData = data.filter((item) => item.name === id)[ 0 ];

    return <PersonComponent data = { currentPersonData }/>;
};

export default Person;
