// Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    background-color: #04819E;
`;

export const NavBar = styled.nav`
    display: flex;
    padding: 10px 0;
    justify-content: center;
`;

export const Link = styled(NavLink)`
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin: 0 18px;
    text-decoration: none;

    &:hover, &.active {
        color: #60B9CE;
    }
`;
