// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Users = lazy(() => import(/* webpackChunkName: "Users" */ './Users'));
