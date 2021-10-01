// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Main } from '../pages';

export const Public: FC = () => (
    <Switch>
        <Route
            exact
            path = '/'>
            <Main />
        </Route>
        <Redirect to = '/' />
    </Switch>
);
