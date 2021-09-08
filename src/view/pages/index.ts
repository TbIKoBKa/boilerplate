// Core
import { lazy } from 'react';

export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Users = lazy(() => import(/* webpackChunkName: "Users" */ './Users'));
export const ReactCourse = lazy(() => import(/* webpackChunkName: "ReactCourse" */ './ReactCourse'));
export const News = lazy(() => import(/* webpackChunkName: "News" */ './News'));
export const Contacts = lazy(() => import(/* webpackChunkName: "Contacts" */ './Contacts'));
export const Student = lazy(() => import(/* webpackChunkName: "Student" */ './Student'));
export const Secret = lazy(() => import(/* webpackChunkName: "Secret" */ './Secret'));
export const Registration = lazy(() => import(/* webpackChunkName: "Registration" */ './Registration'));
export const People = lazy(() => import(/* webpackChunkName: "People" */ './People'));
export const Person = lazy(() => import(/* webpackChunkName: "Person" */ './Person'));
export const Films = lazy(() => import(/* webpackChunkName: "Films" */ './Films'));
export const Film = lazy(() => import(/* webpackChunkName: "Film" */ './Film'));
