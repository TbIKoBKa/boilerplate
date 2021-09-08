// Core
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`;

export const Link = styled(NavLink)`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    margin: 0 10px;
    color: #f0f0f0;
    
    &:hover {
        color: #ff939d;
    }

    &.active{
        color: #ff6675;
    }
`;
