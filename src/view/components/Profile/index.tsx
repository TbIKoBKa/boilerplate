import React from 'react';
import { useProfile } from '../../../bus/profile';


export const Profile = () => {
    const { data } = useProfile();

    return (
        <div>
            <p>First name: {data.firstName || 'NONE'}</p>
            <p>Second name: {data.surname || 'NONE'}</p>
            <p>Age: {data.age || 'NONE'}</p>
            <p>Email: {data.email || 'NONE'}</p>
            <p>Sex: {data.sex || 'NONE'}</p>
            <p>Speciality: {data.speciality || 'NONE'}</p>
        </div>
    );
};
