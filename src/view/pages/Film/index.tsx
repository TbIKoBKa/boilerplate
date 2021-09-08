// Core
import React, { FC } from 'react';
import { useParams } from 'react-router';
import { useSelector } from '../../../tools/hooks';

// Components
import { Film as FilmComponent } from '../../components';

type ParamsType = {
    id: string
}

const Film: FC = () => {
    const { id } = useParams<ParamsType>();
    const data = useSelector(({ films }) => films);

    const currentFilmData = data.filter((item) => item.episode_id.toString() === id)[ 0 ];

    return <FilmComponent data = { currentFilmData } />;
};

export default Film;
