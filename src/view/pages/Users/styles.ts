import styled, { css } from 'styled-components';

import { Button, DList } from '../../elements';
import { EntityContainer, EntityHeader } from '../styles';

export const Container = styled(EntityContainer)`
    background-color: ${({ theme }) => theme.second.containerBg};
    color: #111;
`;

export const Header = styled(EntityHeader)`
    display: block;
    background-color: ${({ theme }) => theme.second.anotherSecondary};
    border-bottom: 1px solid #fff;
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
`;

export const ActionButton = styled(Button)`
    padding: 12px 24px;
    border-radius: 8px;
    border: 2px solid;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-color .1s ease,
                color .1s ease;
    &:hover {
        color: #fff;
    }
    ${(props) => (props.actionBack && css`
        color: #cf1800;
        border-color: #cf1800;
        &:hover {
            background-color: #cf1800;
            border-color: #cf1800
        }
    `) || css`
        color: #108b00;
        border-color: #108b00;
        &:hover {
            background-color: #108b00;
            border-color: #108b00;
        }
    `}
`;

export const Table = styled.table`
    text-align: center;
    margin: 20px;
`;

export const THead = styled.thead`
    padding: 10px 20px;
    border-bottom: 1px solid #888;
`;

export const TBody = styled.tbody`
    padding: 0px 20px 10px;
`;

export const TRow = styled.tr`
    cursor: pointer;
    &:hover {
        background-color: #44dd77;
    }
`;

export const Td = styled.td`
    padding: 10px 20px;
    font-size: 18px;
`;

export const Th = styled.th`
    padding: 10px 20px;
    font-size: 24px;
    font-weight: bold;
`;

export const UserSection = styled.section`
    width: 40%;
    background-color: #ffffd2;
    padding: 20px 40px;
`;

export const Dl = styled(DList)`
    margin: 8px 0;
    ${({ isMain }) => isMain && css`
        column-count: 2;
    `}
`;

export const Dt = styled.dt`
    font-size: 18px;
    font-weight: bold;
`;

export const Dd = styled.dd`
    font-size: 16px;
    margin-left: 24px
`;
