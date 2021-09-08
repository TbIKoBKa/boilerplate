// Core
import React, { FC } from 'react';

// Components
import { UserMenu } from './UserMenu';
import { NavBar } from './NavBar';

// Images
import logo from '../../../assets/images/logo.png';

// Styles
import { TopbarContainer, Logo } from './styles';

export const TopBar: FC = () => {
    return (
        <>
            <TopbarContainer>
                <Logo src = { logo } />
                <h1>Boilerplate</h1>
                <UserMenu />
            </TopbarContainer>
            <NavBar />
        </>
    );
};
