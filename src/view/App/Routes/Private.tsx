// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';

// Pages
import { Users, ReactCourse } from '../../pages';


export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(()=> {
        if (pathname.match(/login|register/)) {
            push('/');
        }
    });

    return (
        <Switch>
            {/* <Route
                exact
                path = '/'>
                <Main />
            </Route> */}
            <Route
                path = '/users'>
                <Users />
            </Route>
            <Route
                path = '/reactcourse'>
                <ReactCourse />
            </Route>
            <Redirect to = '/reactcourse' />
        </Switch>
    );
};
