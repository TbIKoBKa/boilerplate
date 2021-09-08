// Core
import React, { FC } from 'react';
//import { Link } from 'react-router-dom';

// Routes
import { Routes } from './Routes';

// Elements
//import { Button, Spinner } from '../../elements';

// Components
import { NavBar } from '../../components';

// Styles
import { Header, Container } from './styles';

const ReactCourse: FC = () => (
    <>
        <Header>
            <NavBar />
        </Header>
        <Container>
            <Routes />
        </Container>
    </>
);

export default ReactCourse;
