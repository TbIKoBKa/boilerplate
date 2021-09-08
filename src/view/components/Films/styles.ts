import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Films = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    align-self: center;
`;

export const Film = styled.li`
    width: fit-content;
    padding: 8px 18px;
`;

export const StyledLink = styled(Link)`
    font-size: 28px;
    text-decoration: none;
`;
