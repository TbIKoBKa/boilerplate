// Core
import React, { FC } from 'react';
import { useFilmsQuery } from '../../../bus/films';

// Components
import { Films as FilmsComponent } from '../../components';

// Elements
import { Spinner } from '../../elements';

const Films: FC = () => {
    const { loading } = useFilmsQuery();

    if (loading) {
        return <Spinner absolute />;
    }

    return <FilmsComponent />;
};

export default Films;
