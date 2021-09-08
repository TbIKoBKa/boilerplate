// Core
import React, { FC } from 'react';

// Styles
import { Header, NavBar as StyledNavBar, Link } from './styles';

export const NavBar: FC = () => {
    return (
        <Header>
            <StyledNavBar>
                <Link
                    exact
                    to = '/' >Homepage
                </Link>
                <Link
                    exact
                    to = '/users' >Users
                </Link>
                <Link
                    to = '/reactcourse' >React
                </Link>
            </StyledNavBar>
        </Header>
    );
};
