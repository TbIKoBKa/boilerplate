// Core
import React, { FC } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router';

// Pages
import { News, Contacts, Secret, Registration, Student, People, Person, Films, Film  } from '../..';

export const Routes: FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route
                exact
                path = { `${path}/news` }>
                <News />
            </Route>
            <Route
                path = { `${path}/contacts` }>
                <Contacts />
            </Route>
            <Route
                path = { `${path}/secret/:value?` }>
                <Secret />
            </Route>
            <Route
                path = { `${path}/registration` }>
                <Registration />
            </Route>
            <Route
                path = { `${path}/student` }>
                <Student />
            </Route>
            <Route
                exact
                path = { `${path}/people` }>
                <People />
            </Route>
            <Route
                exact
                path = { `${path}/people/:id?` }>
                <Person />
            </Route>
            <Route
                exact
                path = { `${path}/films` }>
                <Films />
            </Route>
            <Route
                exact
                path = { `${path}/films/:id?` }>
                <Film />
            </Route>

            <Redirect to = { `${path}/news` } />
        </Switch>
    );
};
