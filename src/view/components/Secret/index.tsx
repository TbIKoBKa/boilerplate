// Core
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

type ParamType = {
    value: string
}

export const Secret: FC = () => {
    const { value } = useParams<ParamType>();

    return <p>My Secret: {value.split('_').join(' ') || 'no secrets'}</p>;
};
