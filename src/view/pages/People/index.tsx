// Core
import React, { FC } from 'react';
import { usePeopleQuery } from '../../../bus/people';

// Components
import { People as PeopleComponent } from '../../components';

// Elements
import { Spinner } from '../../elements';

const People: FC = () => {
    const { loading } = usePeopleQuery();

    if (loading) {
        return <Spinner absolute />;
    }

    return <PeopleComponent />;
};

export default People;
