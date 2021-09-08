// Core
import styled from 'styled-components';

// Styles
import { EntityContainer, EntityHeader } from '../styles';

export const Container = styled(EntityContainer)`
    box-sizing: border-box;
    position: relative;
    padding: 20px;
    background-color: ${({ theme }) => theme.second.containerBg};
    min-height: max-content;
`;

export const Header = styled(EntityHeader)`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.second.anotherSecondary};
`;
