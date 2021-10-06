// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Photos = lazy(() => import(/* webpackChunkName: "Photos" */ './Photos'));
