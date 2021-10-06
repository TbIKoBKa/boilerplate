// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main, Photos } from '../pages';

export const Public: FC = () => (
    <Switch>
        <Route
            exact
            path = '/weather'>
            <Main />
        </Route>
        <Route
            exact
            path = '/photos'>
            <Photos />
        </Route>
        <Redirect to = '/weather' />
    </Switch>
);
