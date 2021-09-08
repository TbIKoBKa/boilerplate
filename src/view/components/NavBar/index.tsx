// Core
import React from 'react';
import { useRouteMatch } from 'react-router';

// Styles
import { Nav, Link } from './styles';

export const NavBar = () => {
    const { path } = useRouteMatch();

    return (
        <Nav>
            <Link
                exact
                to = { `${path}/news` }>
                News
            </Link>
            <Link
                exact
                to = { `${path}/contacts` }>
                Contacts
            </Link>
            <Link
                exact
                to = { `${path}/secret/i_ate_grandpa` }>
                Secret
            </Link>
            <Link
                exact
                to = { `${path}/registration` }>
                Registration
            </Link>
            <Link
                exact
                to = { `${path}/student` }>
                Student
            </Link>
            <Link
                exact
                to = { `${path}/people` }>
                People
            </Link>
            <Link
                exact
                to = { `${path}/films` }>
                Films
            </Link>
        </Nav>
    );
};
